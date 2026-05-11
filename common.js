document.addEventListener("DOMContentLoaded", function() {
    // 現在のページがトップ階層か、サブフォルダ階層かを判定
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

    // フッターのHTML（リンク充実版）
    const footerHtml = `
    <footer class="site-footer">
        <div class="turf-line"></div>
        <div class="footer-content">
            <div class="footer-group">
                <p class="group-title">KAWASAKI FRONTALE</p>
                <div class="footer-links">
                    <a href="https://www.frontale.co.jp/" target="_blank">HP</a>
                    <a href="https://www.youtube.com/user/frontalechannel" target="_blank">YouTube</a>
                    <a href="https://x.com/frontale_staff" target="_blank">X</a>
                    <a href="https://www.instagram.com/kawasaki_frontale/" target="_blank">Insta</a>
                    <a href="https://www.tiktok.com/@kawasaki_frontale" target="_blank">TikTok</a>
                    <a href="https://page.line.me/frontale" target="_blank">LINE</a>
                    <a href="https://www.facebook.com/kawasakifrontaleofficial" target="_blank">FB</a>
                </div>
            </div>

            <div class="footer-group">
                <p class="group-title">FACILITIES</p>
                <div class="footer-links secondary">
                    <div class="facility-unit">
                        <span>生田:</span>
                        <a href="https://ikuta.frontown.com/" target="_blank">HP</a>
                        <a href="https://x.com/frontown_ikuta" target="_blank">X</a>
                    </div>
                    <div class="facility-unit">
                        <span>鷺沼:</span>
                        <a href="https://www.frontown.jp/" target="_blank">HP</a>
                    </div>
                    <div class="facility-unit">
                        <span>富士通スタ:</span>
                        <a href="https://kawasaki-fujimi.com/" target="_blank">HP</a>
                        <a href="https://x.com/fujitsu_statadi" target="_blank">X</a>
                    </div>
                    <div class="facility-unit">
                        <span>富士見公園:</span>
                        <a href="https://www.fujimi-park.jp/" target="_blank">HP</a>
                        <a href="https://x.com/fujimi_park" target="_blank">X</a>
                    </div>
                </div>
            </div>

            <p class="footer-tagline">FOR THE BLUE. FOR THE FUTURE.</p>
            <p class="copyright">&copy; 2026 FRONTOWN IKUTA</p>
        </div>
    </footer>
    `;

    // bodyの先頭にヘッダーを挿入
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // bodyの最後にフッターを挿入
    document.body.insertAdjacentHTML('beforeend', footerHtml);
});
