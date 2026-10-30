# 西宮工業

Vite + React + TypeScript + Tailwind のSPA。i18next（多言語）、react-router、Supabase、Firebase、Stripe、recharts を使用。

## コマンド
- `npm ci` — 依存を入れる（package-lock.json あり）
- `npm run dev` — 開発サーバー
- `npm run build` — 本番ビルド（`out/` 等）
- `npm run lint` — ESLint（警告0が条件）
- `npm run type-check` — 型チェック

## ルール
- コミット前に `npm run lint` と `npm run type-check` を通す
- `auto-imports.d.ts` は自動生成。手で編集しない
- Stripe・Supabase の秘密鍵はクライアントに出さない。環境変数は `.env*` に置きコミットしない
- 文言を足したら i18n の各言語ファイルにも足す
- 詳しい資料は `docs/`
