// 1) 색상 변경 함수
function changeColor(color) {
  // 응원봉의 발광부 배경색과 그림자 색상을 변경
  const glowHead = document.querySelector('.glow-head');
  const logoParts = document.querySelectorAll('.nct-logo-container div div');
  
  glowHead.style.background = color;
  glowHead.style.boxShadow = `0 0 30px ${color}`;
  
  logoParts.forEach(part => {
    part.style.background = color;
  });
}

// 2) 유닛 테마 변경 함수
function applyUnitTheme(unit) {
  const themes = {
    'nct-127': '#d4ff00', // 시그니처 형광연두
    'nct-dream': '#82e600', // 조금 더 짙은 초록빛
    'wayv': '#ff0000',      // WayV의 강렬한 레드 포인트 (선택사항)
    'nct-wish': '#96f2d7',  // 위시의 청량한 민트빛
    'nct-u': '#ffffff'      // U의 세련된 화이트
  };
  
  const selectedColor = themes[unit] || '#d4ff00';
  changeColor(selectedColor);
  alert(`${unit} 테마가 적용되었습니다!`);
}

// 3) 충전 애니메이션
function chargeStick() {
  const fill = document.querySelector('.battery-fill');
  const level = document.querySelector('#battery-level');
  fill.style.width = '100%';
  level.innerText = '100% (Full)';
}
