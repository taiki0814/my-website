function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.6895, lng: 139.6917 }, // 東京中心
    zoom: 10,
  });

  const shops = [
    {
      name: "茶寮都路里 大丸東京店",
      position: { lat: 35.6812, lng: 139.7671 },
      station: "東京駅",
      access: "東京駅から徒歩1分",
      review: "抹茶パフェが絶品！"
    },
    {
      name: "辻利 銀座店",
      position: { lat: 35.6694, lng: 139.7638 },
      station: "銀座駅",
      access: "銀座駅A2出口から徒歩3分",
      review: "抹茶ソフトとラテが上品な味わい。"
    },
    {
      name: "おちゃらか 日本橋店",
      position: { lat: 35.6850, lng: 139.7735 },
      station: "日本橋駅",
      access: "日本橋駅直結 コレド室町1F",
      review: "創作抹茶スイーツと和紅茶が楽しめる。"
    },
    {
      name: "茶の庭 ルミネ立川店",
      position: { lat: 35.6976, lng: 139.4132 },
      station: "立川駅",
      access: "立川駅直結 ルミネ1F",
      review: "本格宇治抹茶スイーツのカフェスタンド。"
    },
    {
      name: "抹茶カフェHACHI 横浜元町店",
      position: { lat: 35.4409, lng: 139.6489 },
      station: "元町・中華街駅",
      access: "元町・中華街駅から徒歩5分",
      review: "抹茶×フルーツのスイーツが新感覚。"
    },
    {
      name: "茶寮伊藤園 渋谷ヒカリエShinQs店",
      position: { lat: 35.6595, lng: 139.7036 },
      station: "渋谷駅",
      access: "渋谷駅直結ヒカリエB2F",
      review: "抹茶ラテとどら焼きのセットが人気。"
    },
    {
      name: "中村藤吉本店 銀座店",
      position: { lat: 35.6717, lng: 139.7631 },
      station: "銀座駅",
      access: "銀座駅から徒歩5分",
      review: "ほうじ茶ゼリーもおすすめ。"
    },
    {
      name: "ナナズグリーンティー 横浜ジョイナス",
      position: { lat: 35.4658, lng: 139.6220 },
      station: "横浜駅",
      access: "横浜駅西口直結",
      review: "ランチも楽しめるカフェ。"
    },
    {
      name: "ななや 青山店",
      position: { lat: 35.6631, lng: 139.7125 }, // 東京都渋谷区渋谷2丁目7-12
      station: "表参道駅 / 渋谷駅",
      access: "表参道駅B1出口から徒歩約7分",
      review: "世界一濃い抹茶ジェラートが話題！"
    },
    {
      name: "一〇八抹茶茶廊 川崎アゼリア店",
      position: { lat: 35.5306, lng: 139.6964 }, // 神奈川県川崎市川崎区駅前本町26-2
      station: "川崎駅",
      access: "川崎駅直結アゼリア地下街内",
      review: "もちもち抹茶わらび餅ドリンクが美味しい。"
    }
  ];

  shops.forEach(shop => {
    const marker = new google.maps.Marker({
      position: shop.position,
      map,
      title: shop.name
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div>
          <h3>${shop.name}</h3>
          <p><strong>最寄り駅:</strong> ${shop.station}</p>
          <p><strong>行き方:</strong> ${shop.access}</p>
          <p><strong>レビュー:</strong> ${shop.review}</p>
        </div>
      `
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
