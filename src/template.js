export default (html) =>
    <html lang="es">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Prueba de ReactJS para Platzi" />
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            <link rel="apple-touch-icon" sizes="57x57" href="./static/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="./static/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="./static/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="./static/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="./static/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="./static/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="./static/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="./static/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="./static/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="./static/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="./static/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="./static/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="./static/favicon-16x16.png" />
            <meta name="msapplication-TileImage" content="./static/ms-icon-144x144.png" />
            <meta name="msapplication-TileColor" content="#121F3D" />
            <meta name="theme-color" content="#121F3D" />
            <link rel="manifest" href="./static/manifest.json" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <title>Platzi Movies</title>
        </head>

        <body>
            <noscript>Este sitio necesita JavaScript para funcionar.</noscript>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}
            </script>
            <div id="root">${html}</div>
            <script src="/dist/bundle.js"></script>
        </body>

    </html>
    ;