# hw1：交作業流程

（這裡的 remote 代表 GitHub 端）

## Instructions

請用文字一步步敘述應該如何交作業。

範例：

新開一個 branch：`git branch hw1`
切換到 branch：`git checkout hw1`

---

### 寫作業的前置作業
0. 複製一份 repository 到 local 端 `$ git clone git@github.com:Lidemy/mentor-program-4th-cshif.git`
1. 定位到 Git 所在的資料夾
2. 開一個叫 `week1_hw` 的新分支，作為交第一週作業使用 `$ git branch week1_hw`
3. 寫作業 ⌨️，第一週作業的都完成了

### 交作業流程 (1) local 內容推到 remote
4. 切換到交作業的分支 `$ git checkout week1_hw`
5. 把檔案加進 staged 的狀態（準備進行版本控制） `$ git add hw1.md`
6. 建立一個新版本 `$ git commit -m "hw1 v.1"`
7. 把 `week1_hw` 這個分支的內容推上 origin 這個 GitHub server 的位置 (local -> remote) `$ git push -u origin week1_hw`

### 交作業流程 (2) 提交
8. 到 "Lidemy/mentor-program-4th-cshif" 的 Pull request 按下 "Compare & pull request"，或是自己按 "New pull request" 新增 PR
9. 建立 PR (Create pull request)
10. 到 Lidemy 學習系統的作業列表，按「新增作業」，選擇第幾週、貼上 PR 連結，確認已經檢查過、有完成需求，確認看做當週自我檢討並修正錯誤。送出。

### 交作業流程 (3) 助教看完了
11. PR 頁面顯示 "Merged" 時代表助教已經批改好作業（他同時也會刪掉 remote 的 week1_hw 分支），你可以把 remote 的 master 抓下來和 local 的 master 同步了
12. `$ git pull origin master` 把 remote 的 master 抓下來到 local (本機)
13. `$ git branch -d week1_hw` 刪掉 local 的 week1_hw 分支
14. 交作業流程全部完成。