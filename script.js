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
