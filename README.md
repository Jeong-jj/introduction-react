# SPA로 만든 자기소개 사이트

<br/>

## 📝 프로젝트 소개

React를 기반으로 자기소개 사이트를 SPA로 구현하는 토이 프로젝트입니다.  
본 사이트는 헤더와 메인 배너를 기본으로 하며 Nav에 따라 커리어, 스킬, 포트폴리오 등을 나타내는 섹션으로 구성되어 있습니다.

<br/>

> 🏠 [배포 링크 보러가기](https://jeong-jj.github.io/introduction-react/)  
> ✏ Velog 포스팅: [JS프로젝트를 TS로 리팩토링하기](https://velog.io/@rgfdds98/JS-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-TS-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)

<br/>
<br/>

## 👀 미리보기

![introduction](https://user-images.githubusercontent.com/96231175/230417420-0f8004e2-4a63-4c9f-a19c-931febf2b18c.gif)

<br/>
<br/>

## 📁 구현 사항

### 부분적 리렌더링 & 임시 반응형 UI 적용

- outlet을 이용한 부분적 리렌더링
- 반응형으로 특정 px이하로 화면이 작아지면 다른 UI 표시

```tsx
const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <Nav />

      <Outlet />

      <Footer />
    </>
  );
};

function App() {
  const isPCscreenOrTablet = useMediaQuery({ query: "(min-width:1024px)" });

  return (
    <div className="App">
      {isPCscreenOrTablet ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<History />} />
            <Route path="skills" element={<Skills />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="practice" element={<Practice />} />
          </Route>
        </Routes>
      ) : (
        <Incomplete />
      )}
    </div>
  );
}
```

<br/>

### 스킬 아이콘 클릭시 해당 스킬 설명 표시

- state를 이용하여 스킬에 대한 설명이 아이콘 우측에 뜨도록 구현
- 스킬 아이콘 클릭 시 해당 스킬의 index값을 setter를 통해 저장하여 각각 다른 설명 내용을 보여줌

```tsx
export const Skills = () => {
  const skills = data.skills;

  const [active, setActive] = useState(4);

  const handleClick = (id: number) => {
    setActive(id);
  };

  return (
    <S.SectionContainer>
      <S.ContentsWrap>
        {/* ... */}
          <S.IconsWrap>
            {skills.main.map((data, index) => (
              <S.Icon
                key={index}
                className={data.name}
                onClick={() => handleClick(index)}
              >
                <img src={data.icon} alt={data.name} />
              </S.Icon>
            ))}
          </S.IconsWrap>
        {/* ... */}

        <S.DescWrap>
          <h2>{skills.main[active].name}</h2>

          <S.DescText>
            {skills.main[active].desc.map((data: string) => (
              <p>· {data}</p>
            ))}
          </S.DescText>
        </S.DescWrap>
      </S.ContentsWrap>
    </S.SectionContainer>
  );
};
```

<br/>

### 모달창 구현

- 포트폴리오 클릭시 데이터 전달 후 해당 정보를 모달창으로 그려냄

```tsx
export const Portfolio = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<product>(null);

  const modalOpen = (data: product) => {
    setModalData(data);
    setModalOpen((prev) => !prev);
  };
  const modalClose = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <S.SectionContainer>
      {/* component 내용 */}

      {isModalOpen && (
        <PortfolioModal data={modalData} toggleClose={modalClose} />
      )}
    </S.SectionContainer>
  );
};
```

<br/>
<br/>

## ⚙ 개발 스택

- React
- TypeScript
- react-router-dom
- styled-components
- react-responsive
- react-fontawesome
