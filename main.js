const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 300,        // 응원봉이 보일 창 가로 크기
    height: 400,       // 응원봉이 보일 창 세로 크기
    transparent: true, // 배경을 투명하게 설정
    frame: false,      // 창 상단 바(닫기, 최소화 등) 제거
    alwaysOnTop: true, // 다른 창들보다 항상 위에 표시
    resizable: false,  // 사용자가 창 크기를 임의로 조절하지 못하게 함
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 300, height: 400,
    transparent: true, frame: false, alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');

  // 유튜브 감시 타이머 (1초마다 실행)
  setInterval(() => {
    // 실제로는 창 목록을 가져오는 추가 모듈이 필요하지만, 
    // 여기서는 개념적으로 '감지 시 메시지 전송' 로직을 넣습니다.
    // 임시로 '특수 효과 모드'를 켜고 끄는 명령을 보냅니다.
    win.webContents.send('youtube-check', "NCT"); 
  }, 1000);
}

app.whenReady().then(createWindow);

  win.loadFile('index.html'); // 아래에서 만들 HTML 파일을 불러옵니다.
}

app.whenReady().then(createWindow);

// 모든 창이 닫히면 앱 종료
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

