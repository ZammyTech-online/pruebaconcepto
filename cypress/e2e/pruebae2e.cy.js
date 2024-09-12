describe('Autenticación de usuario en Tucoban', () => {
    it('Debería permitir al usuario ingresar sus credenciales y manejar la navegación condicionalmente', () => {
  
      // Paso 1: Visita la página de inicio de sesión
cy.visit('https://api-test.iesa.es/tucoban/login');
  
      // Paso 2: Ingresa el nombre de usuario en el campo correspondiente
      cy.get('#userName').type('zammy.cristo@iesa.es');
  
      // Paso 3: Ingresa la contraseña en el campo correspondiente
      cy.get('#userPass').type('7E.ae6EUUg');
  
      // Paso 4: Haz clic en el botón "Acceder" para iniciar sesión
      cy.contains('Acceder').click();
  
      // Paso 5: Espera 900ms para que la página cargue completamente
      cy.wait(900);
  
      // Paso 6: Haz clic en el botón "Siguiente" si aparece en la pantalla
      
      cy.get('button.btn-main').contains('Siguiente').click();
  
      // Paso 7: Haz clic en el menú "Remesas"
cy.get('ul.menu').contains('Remesas').click();
  
      // Paso 8: Verifica si aparece el botón "Crear cuenta" después de seleccionar "Remesas"
      cy.get('body').then(($body) => {
        // Si el botón "Crear cuenta" está presente...
        if ($body.find('button.btn-main:contains("Siguiente")').length > 0) {
          // Haz clic en el botón "Crear cuenta"
          cy.get('button.btn-main').contains('Siguiente').should('be.visible').click();
          cy.get('button.btn-main').contains('Crear cuenta').should('be.visible').click();
cy.visit('https://api-test.iesa.es/tucoban/account/list');
          cy.get('button.btn-main').contains('Siguiente').click();
          cy.get('span.text').contains('Atrás').should('be.visible').click();
          cy.get('button.btn-main').contains('Siguiente').click();
        } else {
          // Si no está presente, continúa con las otras opciones del menú
          // Haz clic en "Pagos"
cy.get('ul.menu').contains('Pagos').click();
          // Haz clic en "Movimientos"
cy.get('ul.menu').contains('Movimientos').click();
          // Haz clic en "Alertas y notificaciones"
cy.get('ul.menu').contains('Alertas y notificaciones').click();    
        }
      });
    });
  });