# 使用 Vercel 免费部署并绑定 GoDaddy 域名 goflamma.ai

本文档说明如何将本项目部署到 Vercel，并将 GoDaddy 上的域名 **goflamma.ai** 绑定到该站点。

---

## 一、项目已做的配置

- **`vercel.json`**：已配置构建命令、输出目录和 SPA 路由回退（`/privacy`、`/terms` 等会正确打开首页并由前端路由处理）。
- **`vite.config.ts`**：`base` 已设为 `'/'`，便于在根域名下正确加载静态资源。
- 仓库已推送到 GitHub：`https://github.com/dramaad/officialwebsite`。

---

## 二、在 Vercel 上部署项目

1. **登录 / 注册 Vercel**  
   打开 [https://vercel.com](https://vercel.com)，用 GitHub 账号登录（推荐）。

2. **导入 GitHub 仓库**  
   - 点击 **Add New…** → **Project**  
   - 选择 **Import Git Repository**，找到并选择 **dramaad/officialwebsite**  
   - 若未授权，按提示完成 GitHub 授权

3. **配置项目（通常保持默认即可）**  
   - **Framework Preset**：Vite（一般会自动识别）  
   - **Build Command**：`npm run build`（与 `vercel.json` 一致）  
   - **Output Directory**：`dist`  
   - **Install Command**：`npm install`  
   无需改 Root Directory，直接 **Deploy**。

4. **等待部署完成**  
   部署成功后，会得到一个 `*.vercel.app` 的地址，例如：  
   `https://officialwebsite-xxx.vercel.app`  
   可以先打开该链接确认网站正常。

---

## 三、在 Vercel 中添加自定义域名 goflamma.ai

1. **进入项目的域名设置**  
   - 在 Vercel 中打开 **officialwebsite** 项目  
   - 顶部进入 **Settings** → 左侧 **Domains**

2. **添加域名**  
   - 点击 **Add Domain**  
   - 输入：**goflamma.ai**，确认添加  
   - 若提示同时添加 `www`，建议也添加 **www.goflamma.ai**，便于之后做跳转

3. **查看 Vercel 给出的 DNS 配置**  
   添加后，Vercel 会显示需要在你域名所在处（GoDaddy）配置的 DNS 记录，例如：  
   - **根域名 goflamma.ai（Apex）**：一条 **A** 记录，指向 Vercel 提供的 IP（如 `76.76.21.21`，以 Vercel 控制台显示为准）  
   - **www.goflamma.ai**：一条 **CNAME** 记录，指向类似 `cname.vercel-dns.com` 或项目专属的 `xxx.vercel-dns.com`（以控制台显示为准）  
   请以当前项目 **Domains** 页面上显示的值为准。

---

## 四、在 GoDaddy 中配置 DNS

1. **登录 GoDaddy**  
   打开 [https://www.godaddy.com](https://www.godaddy.com) 并登录。

2. **进入域名 DNS 管理**  
   - 进入 **My Products**  
   - 找到 **goflamma.ai**，点击 **DNS** 或 **Manage DNS** 进入 DNS 记录管理

3. **添加 / 修改记录（与 Vercel 显示一一对应）**  
   - **根域名 goflamma.ai**  
     - 类型：**A**  
     - 名称：**@**（表示根域名）  
     - 值：Vercel 给出的 **A 记录 IP**（例如 `76.76.21.21`）  
     - TTL：默认或 600  
   - **www 子域名**  
     - 类型：**CNAME**  
     - 名称：**www**  
     - 值：Vercel 给出的 **CNAME 目标**（如 `cname.vercel-dns.com` 或项目专属地址）  
     - TTL：默认或 600  

4. **保存**  
   保存后等待 DNS 生效（通常几分钟到几小时，最多约 24–48 小时）。

---

## 五、在 Vercel 中确认域名生效

1. 回到 Vercel 项目 **Settings → Domains**  
2. 查看 **goflamma.ai** 和 **www.goflamma.ai** 的状态  
3. 当状态变为 **Valid** / 绿色勾选时，表示配置正确  
4. 若长时间无效，可检查：  
   - GoDaddy 中 A / CNAME 的主机名、值是否与 Vercel 完全一致  
   - 是否有多条冲突的 A 或 CNAME 记录

---

## 六、可选：www 与根域名互相跳转

若希望：  
- 访问 **www.goflamma.ai** 时跳转到 **goflamma.ai**，或  
- 访问 **goflamma.ai** 时跳转到 **www.goflamma.ai**  

可在 Vercel **Settings → Domains** 中为对应域名设置 **Redirect**，按界面提示选择“重定向到”的域名即可。

---

## 七、后续更新流程

代码更新后：

1. 将更改推送到 GitHub 的 `main` 分支  
   ```bash
   git add .
   git commit -m "你的提交说明"
   git push
   ```
2. Vercel 会自动检测到推送并重新构建、部署  
3. 部署完成后，**goflamma.ai** 和 **www.goflamma.ai** 会自动指向新版本

---

## 参考链接

- [Vercel - Adding a Custom Domain](https://vercel.com/docs/projects/domains/add-a-domain)  
- [Vercel - Redirecting www domains](https://vercel.com/docs/domains/deploying-and-redirecting#redirecting-www-domains)
