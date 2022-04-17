    //変数の追加
    let topOthello = $tableElements[index - 8].innerHTML;
    let upperTopOthello = $tableElements[index - 16].innerHTML;
    let bottomOthello = $tableElements[index + 8].innerHTML;
    let lowerBottomOthello = $tableElements[index + 16].innerHTML;

    //相手のオセロを上方向で挟み込んだ場合　黒色
    if (upperTopOthello.match(othelloBlack) && topOthello.match(othelloWhte)) {
      let targetIndex = index - 8;
      putOthello(targetIndex, index);
    }

    //相手のオセロを上方向で挟み込んだ場合 白色
    if (upperTopOthello.match(othelloWhte) && topOthello.match(othelloBlack)) {
      let targetIndex = index - 8;
      putOthello(targetIndex, index);
    }

    //相手のオセロを下方向で挟み込んだ場合　黒色
    if (lowerBottomOthello.match(othelloBlack) && bottomOthello.match(othelloWhte)) {
      let targetIndex = index + 8;
      putOthello(targetIndex, index);
    }

    //相手のオセロを下方向で挟み込んだ場合 白色
    if (lowerBottomOthello.match(othelloWhte) && bottomOthello.match(othelloBlack)) {
      let targetIndex = index + 8;
      putOthello(targetIndex, index);
    }