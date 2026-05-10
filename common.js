// common.js
function loadCommonParts() {
    // ヘッダーのHTML
    const headerHTML = `
    <div class="sticky-header">
        <header>
            <a href="../" style="text-decoration: none; display: inline-block;">
                <img src="../assets/images/ikutalogo.png" alt="FRONTOWN IKUTA">
                <div class="sub-title">STAFF PORTAL</div>
            </a>
        </header>

        <nav class="nav-menu">
            <ul>
                <li><a href="../manual/">マニュアル</a></li>
                <li><a href="../setup/">準備物</a></li>
                <li><a href="../lost/">落とし物</a></li>
                <li><a href="../roster/">名簿</a></li>
                <li><a href="../inventory/">備品検索</a></li>
                <li><a href="../pop/">掲示物</a></li>
                <li><a href="../contacts/">連絡先</a></li>
            </ul>
        </nav>
    </div>
    `;

    // フッターのHTML（必要になったらここに追加）
    const footerHTML = `
    <footer style="text-align:center; padding:20px; color:#888; font-size:0.8rem;">
        &copy; 2026 FRONTOWN IKUTA STAFF PORTAL
    </footer>
    `;

    // bodyの先頭にヘッダーを挿入
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    // bodyの最後にフッターを挿入
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// ページ読み込み時に実行
window.addEventListener('DOMContentLoaded', loadCommonParts);
