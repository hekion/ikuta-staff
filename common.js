document.addEventListener("DOMContentLoaded", function() {
    // 現在のページがトップ階層か、サブフォルダ階層かを判定
    // pathnameの中に 'manual' などのフォルダ名が含まれているか、
    // あるいは index.html 以外（階層が深い）かを確認します
    const isSubFolder = window.location.pathname.includes('/manual/') || 
                        window.location.pathname.includes('/setup/') || 
                        window.location.pathname.includes('/lost/') ||
                        window.location.pathname.includes('/roster/') ||
                        window.location.pathname.includes('/inventory/') ||
                        window.location.pathname.includes('/pop/') ||
                        window.location.pathname.includes('/contacts/');

    // 階層に応じてパスの接頭辞を切り替え
    const pathPrefix = isSubFolder ? '../' : './';

    // ヘッダー・ナビゲーションのHTML
    const headerHtml = `
    <div class="sticky-header">
        <header>
            <a href="${pathPrefix}" style="text-decoration: none; display: inline-block;">
                <img src="${pathPrefix}assets/images/ikutalogo.png" alt="FRONTOWN IKUTA">
                <div class="sub-title">STAFF PORTAL</div>
            </a>
        </header>
        <nav class="nav-menu">
            <ul>
                <li><a href="${pathPrefix}manual/">マニュアル</a></li>
                <li><a href="${pathPrefix}setup/">準備物</a></li>
                <li><a href="${pathPrefix}lost/">落とし物</a></li>
                <li><a href="${pathPrefix}roster/">名簿</a></li>
                <li><a href="${pathPrefix}inventory/">備品検索</a></li>
                <li><a href="${pathPrefix}pop/">掲示物</a></li>
                <li><a href="${pathPrefix}contacts/">連絡先</a></li>
            </ul>
        </nav>
    </div>
    `;

    const footerHtml = `
    <footer>
        <p>&copy; 2026 FRONTOWN IKUTA</p>
    </footer>
    `;

    // bodyの先頭にヘッダーを挿入
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // bodyの最後にフッターを挿入
    document.body.insertAdjacentHTML('beforeend', footerHtml);
});
