/**
 * 圖書館管理系統
 */

const library = {
    fiction: ["百年孤獨", "小王子", "哈利波特"],
    science: ["時間簡史", "物種起源", "人類簡史"],
    history: ["史記", "資治通鑑", "明朝"],
  };
  
  const bookStatus = {
    百年孤獨: "在館",
    小王子: "借出",
    哈利波特: "在館",
    時間簡史: "在館",
    物種起源: "遺失",
    人類簡史: "在館",
    史記: "借出",
    資治通鑑: "在館",
    明朝: "維護中",
  };
  
 
  
  // Get all keys of the object
  
  // ==============================================
  // 題目 a
  // 要求：
  // 1. 計算並列印每個分類的書籍數量
  // 輸出格式：
  // "小説類fiction數量：3"
  // "小説類science數量：3"
  // "小説類history數量：3"
  // Tips:獲取所有的keys ， 使用Object.keys() 方法
  // ==============================================
  
  // 題目 a function
  function countBooksByCategory() {

    const keys = Object.keys(library);
  
    console.log(keys); // Output: ["name", "age", "city"]

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]; // Get the current key
      const count = library[key].length; // Get the length of the array for each category
      console.log(`小説類${key}數量：${count}`); // Print the category and count
    }
  }
  /*
    // Iterate over the keys and calculate the number of books in each category
    keys.forEach((key) => {
     const count = library[key].length; // Get the length of the array for each category
    console.log(`小説類${key}數量：${count}`);
    }); // Print the category and count
  }
  */
  
  // 呼叫題目 a function
  countBooksByCategory();
  



  // ==============================================
  // 題目 b
  // 要求：
  // 1. 檢查 bookStatus 並列印所有"不在館"(狀態不是"在館")的書籍
  // 輸出格式：
  // "不在館書籍："
  // "- 小王子 (借出)"
  // Tips: 使用 for...in 迴圈遍歷 bookStatus 對象 , 使用if 條件判斷
  // 進階: 加入分類，display如下
  // "- fiction 小王子 (借出)"
  // ==============================================
  
  // 題目 b function
  function checkBookStatus() {

    const status = Object.keys(bookStatus);
    console.log(status);
    //check status of each book which is not "在館"
    console.log("不在館書籍：");
    for (let i = 0; i < status.length; i++) {
      const book = status[i];
      //const category = Object.keys(library).find(cat => library[cat].includes(book));
      if (bookStatus[book] !== "在館") {
        //console.log(`- ${category} ${book} (${bookStatus[book]})`);
        console.log(`- ${book} ${bookStatus[book]}`);
        //console.log(`- ${book}`);
      }
    }
  }

  checkBookStatus();


  function checkBookStatus_withCat() {
    console.log("不在館書籍：");
  
    // Iterate over each category in the library object
    for (const category in library) {
      // Iterate over each book in the current category
      for (const book of library[category]) {
        // Check if the book's status is not "在館"
        if (bookStatus[book] !== "在館") {
          // Print the category, book name, and its status
          console.log(`- ${category} ${book} (${bookStatus[book]})`);
        }
      }
    }
  }
  
  checkBookStatus_withCat();
  // ==============================================
  // 題目 c：書籍狀態統計
  // 要求：
  // 1. 使用對象存儲統計結果
  // 輸出格式：
  // "書籍狀態統計："
  // "- 在館：5本"
  // "- 借出：2本"
  // "- 其他：2本"
  // Tips: 創建一嗰變數 statusCount 用來存儲統計結果，
  // 然後使用for loop 獲取書本當前狀態，根據當前狀態更改變數
  // ==============================================
  
  // 題目 c function
  function countBookStatus() {}
  
  // ==============================================
  // 題目 d：書籍搜索功能
  // 要求：
  // 1. 實現搜索包含關鍵詞的書籍（如"簡史"）
  // 輸出格式：
  // "搜索"簡史"結果："
  // "- 時間簡史"
  // "- 人類簡史"
  // Tips: 使用 Object.values(library).flat(); 獲取全部圖書
  // 使用Array.find() 或 for...of 迴圈遍歷所有書籍，
  // 判斷書籍名稱是否包含關鍵詞
  // ==============================================
  
  
  function searchBooks(keyword) {
    console.log(`搜索"${keyword}"結果：`);
    
    AllBooks = Object.values(library).flat(); // Flatten the library object to get all books
    for (const book of AllBooks) {
      // Check if the book name contains the keyword
      if (book.includes(keyword)) {
        // Print the book name
        console.log(`- ${book}`);
      }
    }
    
  }
  

  /*
  // 題目 d：for...of 迴圈 - 書籍搜尋功能
  function searchBooks(keyword) {
    console.log(`搜索"${keyword}"結果：`);
  
    // Iterate over each category in the library object
    for (const category in library) {
      // Iterate over each book in the current category
      for (const book of library[category]) {
        // Check if the book name contains the keyword
        if (book.includes(keyword)) {
          // Print the book name
          console.log(`- ${book}`);
        }
      }
    }
  }
  */
  searchBooks("簡史");
  // ==============================================