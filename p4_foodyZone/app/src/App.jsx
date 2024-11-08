import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/searchCard/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorin, setErrorin] = useState(null);
  const [selectedBtn,setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFooData = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);

        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setErrorin("Unable to fetch data");
      }
    };
    fetchFooData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);  
  };

  const filteredFood = (type)=>{
    if(type ==="all"){
      setFilteredData(data)
      setSelectedBtn("all");
      return;
    }

    const filter = data.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter)
    setSelectedBtn(type)
  }

  const filterBtns = [
    {
      name : "ALL",
      type : "all"
    },
    {
      name : "Breakfast",
      type : "breakfast"
    },{
      name : "Lunch",
      type : "lunch"
    },{
      name : "Dinner",
      type : "dinner"
    },
  ]

  if (errorin) return <div>{errorin}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/FoodyZoneLogo.svg" alt="logo" />
          </div>
          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food..."
            />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value)=><Button key={value.name}
          onClick={()=>filteredFood(value.type)}
          >{value.name}</Button>)}
         
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </div>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;



  .search {
    input {
      border: none;
      background-color: transparent;
      min-width: 285;
      height: 40px;
      border: 1px solid red;
      border-radius: 5px;
      padding: 10px;
      font-size: 16px;
    }
  }

  @media (0 < width <600px) {
    flex-direction: column;
    height: 80px;
    
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  padding: 6px 12px;
  background: #ff4343;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #f61919;
  }
`;
