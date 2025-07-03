import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        // Ruta principal de la aplicación
        path: '',
        loadComponent: () =>
            import('./layout/main-layout/main-layout').then(m => m.MainLayout),
        children: [

            // Rutas hijas de la ruta principal
            {
                // Ruta para el componente Home(inicio)
                path: '',
                loadComponent: () =>
                    import('./ features/home/home').then(m => m.Home)
            },
        ]
    },
    {   // Ruta para el componente de error 404
        path: '',
        loadComponent: () =>
            import('./layout/simple-layout/simple-layout').then(m => m.SimpleLayout),
        children: [
            {
                // Ruta para el componente not-found
                path: '404',
                loadComponent: () =>
                    import('./ features/error/error').then(m => m.Error)
            },
            {
                path: '**',
                redirectTo: '404',
            }
        ]
    }
];
