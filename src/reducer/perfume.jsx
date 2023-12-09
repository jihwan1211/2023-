import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  perfumeList: [
    {
      perfumeId: 26130360,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26130360-4011-j",
      name: "존바바토스 아티산",
    },
    {
      perfumeId: 26154611,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26154611-3374-j",
      name: "존바바토스 아티산 퓨어",
    },
    {
      perfumeId: 26148429,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26148429-1961-j",
      name: "존바바토스 아티산 블루",
    },
    {
      perfumeId: 26135979,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26135979-2895-j",
      name: "존바바토스 아티산 블랙",
    },
    {
      perfumeId: 26158161,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26158161-9358-j ",
      name: "몽블랑 익스플로러",
    },
    {
      perfumeId: 26163112,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26163112-5119-j ",
      name: "몽블랑 익스플로러 울트라 블루",
    },
    {
      perfumeId: 26124682,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26124682-j",
      name: "몽블랑 스타워커",
    },
    {
      perfumeId: 26134596,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26134596-j",
      name: "몽블랑 레전드",
    },
    {
      perfumeId: 26185064,
      rating: null,
      imgURL: "https://basenotes.com/img/product/3661642088072-j",
      name: "몽블랑 레전드 레드",
    },
    {
      perfumeId: 26148271,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26148271-5160-j",
      name: "몽블랑 레전드 스피릿",
    },
    {
      perfumeId: 26151468,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26151468-3020-j ",
      name: "CK 켈빈클라인 씨케이올",
    },
    {
      perfumeId: 26120368,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26120368-7939-j",
      name: "CK 켈빈클라인 ONE",
    },
    {
      perfumeId: 26120367,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26120367-3748-j",
      name: "CK 켈빈클라인 비",
    },
    {
      perfumeId: 26163822,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26163822-5793-j",
      name: "CK 켈빈클라인 디파이",
    },
    {
      perfumeId: 10212770,
      rating: null,
      imgURL: " https://basenotes.com/img/product/10212770-j ",
      name: "랄프로렌 폴로 랄프",
    },
    {
      perfumeId: 26121307,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26121307-4440-j",
      name: "랄프로렌 폴로 스포츠",
    },
    {
      perfumeId: 26124602,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26124602-8614-j",
      name: "랄프로렌 폴로 블랙",
    },
    {
      perfumeId: 26122205,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26122205-6939-j",
      name: "랄프로렌 폴로 블루",
    },
    {
      perfumeId: 10213181,
      rating: null,
      imgURL: "https://basenotes.com/img/product/10213181-4847-j",
      name: "타미힐피거 타미걸",
    },
    {
      perfumeId: 26121594,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26121594-5602-j",
      name: "타미힐피러 타미",
    },
    {
      perfumeId: 26148009,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26148009-4224-j ",
      name: "메르세데스 벤츠 맨",
    },
    {
      perfumeId: 26144994,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26144994-2127-j ",
      name: "지미추 블로썸",
    },
    {
      perfumeId: 26189838,
      rating: null,
      imgURL: " https://basenotes.com/img/product/5551660063125-p ",
      name: "지미추 아이 원 추",
    },
    {
      perfumeId: 26128479,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26128479-8982-j ",
      name: "지미추",
    },
    {
      perfumeId: 26159475,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26159475-278-j ",
      name: "지미추 플로럴",
    },
    {
      perfumeId: 26150746,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26150746-9907-j",
      name: "지미추 로",
    },
    {
      perfumeId: 26162558,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26162558-1153-j",
      name: "지미추 아이원츄",
    },
    {
      perfumeId: 26131617,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26131617-3096-j ",
      name: "랑방 메리미",
    },
    {
      perfumeId: 26149449,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26149449-2900-j ",
      name: "랑방 모던 프린센스",
    },
    {
      perfumeId: 26123797,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26123797-j ",
      name: "랑방 잔느",
    },
    {
      perfumeId: 26180814,
      rating: null,
      imgURL: "https://basenotes.com/img/product/4681645543842-p",
      name: "랑방 써니 메그놀리아",
    },
    {
      perfumeId: 10212085,
      rating: null,
      imgURL: " https://basenotes.com/img/product/10212085-3867-j ",
      name: "랑방 에끌라 드 아르페쥬",
    },
    {
      perfumeId: 26180816,
      rating: null,
      imgURL: "https://basenotes.com/img/product/5051645543718-p",
      name: "랑방 레 플레르 블루 오키드",
    },
    {
      perfumeId: 26129045,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26129045-j",
      name: "랑방 루머2로즈",
    },
    {
      perfumeId: 26180815,
      rating: null,
      imgURL: "https://basenotes.com/img/product/6461645544056-p",
      name: "랑방 레 플레르 드 워터 릴리",
    },
    {
      perfumeId: 26189726,
      rating: null,
      imgURL: "https://basenotes.com/img/product/5031655650138-j",
      name: "랑방 모네끌라 에끌라 드 아르페쥬",
    },
    {
      perfumeId: 10211952,
      rating: null,
      imgURL: "https://basenotes.com/img/product/10211952-2698-j",
      name: "르오파 겐조",
    },
    {
      perfumeId: 10211957,
      rating: null,
      imgURL: " https://basenotes.com/img/product/6961656077968-w ",
      name: "겐조 플라워바이 겐조",
    },
    {
      perfumeId: 26120906,
      rating: null,
      imgURL: "https://basenotes.com/img/product/9891685809871-j",
      name: "르오파 겐조 옴므",
    },
    {
      perfumeId: 26150436,
      rating: null,
      imgURL: " https://basenotes.com/img/product/2531689181226-j ",
      name: "코치",
    },
    {
      perfumeId: 26254540,
      rating: null,
      imgURL: "https://basenotes.com/img/product/3381689180929-p",
      name: "코치 러브",
    },
    {
      perfumeId: 26185521,
      rating: null,
      imgURL: "https://basenotes.com/img/product/3201641990168-w",
      name: "코치 드림 선셋",
    },
    {
      perfumeId: 26150745,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26150745-5804-j ",
      name: "페라가모 세노리나 인 피오레",
    },
    {
      perfumeId: 26251018,
      rating: null,
      imgURL: "https://basenotes.com/img/product/4571677671254-p",
      name: "페르가모 세뇨리나 리베라",
    },
    {
      perfumeId: 26148294,
      rating: null,
      imgURL: " https://basenotes.com/img/product/5681677671937-p ",
      name: "페르가모 세노리라 미스테리오사",
    },
    {
      perfumeId: 26159545,
      rating: null,
      imgURL: "https://basenotes.com/img/product/4171677671722-p",
      name: "페라가모 세뇨리나 리벨",
    },
    {
      perfumeId: 26180309,
      rating: null,
      imgURL: "https://basenotes.com/img/product/1611641461265-j",
      name: "아리아나그란데 갓 이즈 어 우먼",
    },
    {
      perfumeId: 26154058,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26154058-2385-j ",
      name: "아리아나 그란데 문라이트",
    },
    {
      perfumeId: 26163639,
      rating: null,
      imgURL: " https://basenotes.com/img/product/4461653404206-j ",
      name: "아리아나 그란데 땡큐 넥스트",
    },
    {
      perfumeId: 26161688,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26161688-7520-j ",
      name: "아리아나 그란데 R.E.M",
    },
    {
      perfumeId: 26147194,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26147194-2123-j",
      name: "아리아나그란데 아리",
    },
    {
      perfumeId: 26150445,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26150445-7768-j",
      name: "아리아나그란데 스위트 라이크 캔디",
    },
    {
      perfumeId: 26155825,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26155825-6114-j",
      name: "아리아나그란데 클라우드",
    },
    {
      perfumeId: 10210483,
      rating: null,
      imgURL: " https://basenotes.com/img/product/10210483-j ",
      name: "버버리 터치 우먼",
    },
    {
      perfumeId: 10210482,
      rating: null,
      imgURL: " https://basenotes.com/img/product/10210482-j ",
      name: "버버리 위크앤드 포 우먼",
    },
    {
      perfumeId: 26121597,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26121597-3451-j ",
      name: "버버리 터치 포맨",
    },
    {
      perfumeId: 26121693,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26121693-j",
      name: "버버리 위크엔드 포맨",
    },
    {
      perfumeId: 26124490,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26124490-9378-j ",
      name: "버버리 브리티쉬어",
    },
    {
      perfumeId: 26190562,
      rating: null,
      imgURL: "https://basenotes.com/img/product/3911663162782-p",
      name: "안나수이 코스믹 스카이",
    },
    {
      perfumeId: 26152968,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26152968-7209-j",
      name: "안나수이 판타지아",
    },
    {
      perfumeId: 26158448,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26158448-4373-j",
      name: "안나수이 판타지아 머메이드",
    },
    {
      perfumeId: 26128672,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26128672-j ",
      name: "끌로에",
    },
    {
      perfumeId: 26161427,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26161427-352-j ",
      name: "끌로에 로즈 탠저린",
    },
    {
      perfumeId: 26180315,
      rating: null,
      imgURL: "https://basenotes.com/img/product/3391663258069-p",
      name: "끌로에 나츄렐",
    },
    {
      perfumeId: 26251798,
      rating: null,
      imgURL: "https://basenotes.com/img/product/8781678121293-w",
      name: "끌로에 노마드 자스민 나츄렐",
    },
    {
      perfumeId: 26141826,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26141826-384-j",
      name: "끌로에 로즈 드 끌로에",
    },
    {
      perfumeId: 26154757,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26154757-1971-j",
      name: "끌로에 노마드",
    },
    {
      perfumeId: 26132150,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26132150-3585-j",
      name: "마크제이콥스 데이지 오 쏘 프레쉬",
    },
    {
      perfumeId: 26153111,
      rating: null,
      imgURL: " https://basenotes.com/img/product/8281660059046-p ",
      name: "필로소피 어메이징 그레리스 발레로즈",
    },
    {
      perfumeId: 26158316,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26158316-6317-j",
      name: "필로소피 어메이징 그레이스 매그놀리",
    },
    {
      perfumeId: 26123609,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26123609-8641-j ",
      name: "필로소피 어메이징 그레이스",
    },
    {
      perfumeId: 26126954,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26126954-173-j",
      name: "필로소피 퓨어그레이스",
    },
    {
      perfumeId: 26153564,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26153564-1369-j",
      name: "필로소피 퓨어그레이스 누드로즈",
    },
    {
      perfumeId: 26128238,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26128238-3057-j ",
      name: "클린 웜 코튼",
    },
    {
      perfumeId: 26152594,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26152594-3607-j ",
      name: "클린 리저브 셀 상탈",
    },
    {
      perfumeId: 26251815,
      rating: null,
      imgURL: "https://basenotes.com/img/product/3781678127343-w",
      name: "클린 애플 블로썸",
    },
    {
      perfumeId: 26152593,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26152593-9758-j",
      name: "클린 리저브 스트린 피그",
    },
    {
      perfumeId: 26187670,
      rating: null,
      imgURL: "https://basenotes.com/img/product/4961647459634-p",
      name: "클린 소프트 런드리",
    },
    {
      perfumeId: 26140772,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26140772-9495-j",
      name: "클린 쿨코튼",
    },
    {
      perfumeId: 26140273,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26140273-8617-j",
      name: "클린 레인",
    },
    {
      perfumeId: 26138641,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26138641-j ",
      name: "마이클 코어스 섹시엠버 오드퍼품",
    },
    {
      perfumeId: 26162800,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26162800-3806-j",
      name: "마이클 코어스 고저스",
    },
    {
      perfumeId: 26148778,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26148778-9510-j ",
      name: "나르시소 로드리게즈 푸드레",
    },
    {
      perfumeId: 26254765,
      rating: null,
      imgURL: "https://basenotes.com/img/product/7441690182901-p",
      name: "나스시소 로드리케즈 올 오브 미",
    },
    {
      perfumeId: 26122852,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26122852-9419-j ",
      name: "나르시소 로드리게즈 포 허",
    },
    {
      perfumeId: 26187906,
      rating: null,
      imgURL: "https://basenotes.com/img/product/2941648227916-w",
      name: "나르시소 로드리게즈 크리스탈",
    },
    {
      perfumeId: 26185660,
      rating: null,
      imgURL: "https://basenotes.com/img/product/7301642323467-p",
      name: "나르시소 로드리게즈 머스크 누와르 로제",
    },
    {
      perfumeId: 26158258,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26158258-1564-j",
      name: "나르시소 로드리게즈 퓨어 머스크 포 허",
    },
    {
      perfumeId: 26151173,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26151173-8482-j",
      name: "나르시소 로드리게즈 포러 플뢰 머스크",
    },
    {
      perfumeId: 26125225,
      rating: null,
      imgURL: " https://basenotes.com/img/product/26125225-36-j ",
      name: "베르사체 크리스탈",
    },
    {
      perfumeId: 26138689,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26138689-2088-j",
      name: "베르사체 에로스",
    },
    {
      perfumeId: 26125536,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26125536-1239-j",
      name: "베르사체 맨 오 프레쉬",
    },
    {
      perfumeId: 26150184,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26150184-3372-j",
      name: "베르사체 뿌르옴므 딜런 블루",
    },

    {
      perfumeId: 10211261,
      rating: null,
      imgURL: "https://basenotes.com/img/product/10211261-4969-j",
      name: "엘리자베스 아덴 그린티 라벤",
    },

    {
      perfumeId: 10211259,
      rating: null,
      imgURL: "https://basenotes.com/img/product/10211259-j",
      name: "엘리자베스 아덴 5번가",
    },
    {
      perfumeId: 26151098,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26151098-5426-j",
      name: "엘리자베스 아덴 화이트 티",
    },
    {
      perfumeId: 26193219,
      rating: null,
      imgURL: "https://basenotes.com/img/product/1231672247400-j",
      name: "엘리자베스 아덴 시트론 프리지아",
    },
    {
      perfumeId: 26160777,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26160777-9825-j",
      name: "썽봉 다바나 & 바닐라 버번 오드코릉",
    },
    {
      perfumeId: 26160787,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26160787-3711-j",
      name: "썽봉 네롤리 & 쁘띠 그랭 프렝따니에",
    },
    {
      perfumeId: 26160773,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26160773-2174-j",
      name: "썽봉 베르가모트 & 로즈 소바주",
    },
    {
      perfumeId: 26160778,
      rating: null,
      imgURL: "https://basenotes.com/img/product/26160778-1331-j",
      name: "썽봉 오드떼 & 진저 오드코롱",
    },
    {
      perfumeId: 10211870,
      rating: null,
      imgURL: "https://basenotes.com/img/product/10211870-44-j",
      name: "제니퍼로페즈 글로우 바이제이로",
    },
    {
      perfumeId: 26254681,
      rating: null,
      imgURL: "https://basenotes.com/img/product/7241689955243-j",
      name: "토스 러브미",
    },
  ],
  getRecommendResultLoading: false,
  getRecommendResultSuccess: false,
  getRecommendResulFailure: null,
  resultPerfumes: [],
};

const perfumeSlice = createSlice({
  name: "perfumeReducer",
  initialState,
  reducers: {
    changePerfumeRating: (state, action) => {
      const { pId, score } = action.payload;

      const updatedState = state.perfumeList.map((perfume) => {
        if (perfume.perfumeId === pId) {
          return { ...perfume, rating: score };
        }
        return perfume;
      });

      state.perfumeList = updatedState;
      // return updatedState;
    },
    submitPerfumeRatingsRequest: (state, action) => {
      state.getRecommendResultLoading = true;
      console.log("in reducer", action.payload);
    },
    submitPerfumeRatingsSuccess: (state, action) => {
      state.getRecommendResultLoading = false;
      state.getRecommendResultSuccess = true;
      state.resultPerfumes = action.data;
    },
    submitPerfumeRatingsFailure: (state, action) => {
      state.getRecommendResultLoading = false;
      state.getRecommendResulFailure = action.err;
    },
  },
});

export const { changePerfumeRating, submitPerfumeRatingsRequest, submitPerfumeRatingsSuccess, submitPerfumeRatingsFailure } = perfumeSlice.actions;
export default perfumeSlice;
