function displayList() {
    // 既存のp要素を取得
    const fruitsDiv = document.getElementById('fruits');
    const fruitNames = Array.from(fruitsDiv.getElementsByTagName('p')).map(p => p.textContent);

    // 新しいul要素を作成
    const ul = document.createElement('ul');

    // p要素の内容をli要素に変換してulに追加
    fruitNames.forEach(fruit => {
      const li = document.createElement('li');
      li.textContent = fruit;
      ul.appendChild(li);
    });

    // fruitsDivの内容を置き換え
    fruitsDiv.innerHTML = '';
    fruitsDiv.appendChild(ul);
  }
