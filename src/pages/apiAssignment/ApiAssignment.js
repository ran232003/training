import React, { useEffect, useState } from "react";
import { getImageApi, getPeopleApi } from "./api";
import MyCard from "./components/Card";
import "./api.css";
import MyModal from "./components/MyModal";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadingAction } from "../../store/loadingData";
import Loading from "../../components/LoadingSpinners";
import Input from "./components/Input";
//1. Star Wars character app
const ApiAssignment = () => {
  let loadCount = 0;
  const dispatch = useDispatch();
  const loading = useSelector((state) => {
    return state.loading.loading;
  });
  const [num, setNum] = useState(1);
  const [copyOfApiData, setCopyOfApiData] = useState({ results: [] });
  const [apiData, setApiData] = useState({ results: [] });
  const [apiImageData, setApiImageData] = useState([]);
  const getPeople = async (num) => {
    let data = await getPeopleApi(num);
    console.log(data); //results,next,previous
    setApiData(data);
    setCopyOfApiData(data);
  };
  const getImage = async (num) => {
    let data = await getImageApi(num);
    console.log(data); //results,next,previous
    setApiImageData(data);
  };

  const changePage = async (newNum) => {
    dispatch(loadingAction.toggleLoading(true));
    if (newNum < 1) {
      newNum = 8;
    } else if (newNum > 8) {
      newNum = 1;
    }
    await getPeople(newNum);
    await getImage(newNum);
    setNum(newNum);
  };

  useEffect(() => {
    changePage(1);
    // getPeople(1);
    // getImage(1);
  }, []);
  if (apiImageData.length > 0) {
    return (
      <div class="mainApi">
        <div className="middle">
          <h1>welcome to assignmet API</h1>
        </div>
        <div className="middle">
          <Input
            apiData={apiData}
            copyOfApiData={copyOfApiData}
            setCopyOfApiData={setCopyOfApiData}
            setApiData={setApiData}
          />
        </div>
        <div className="listApi">
          {apiData.results.map((person, index) => {
            loadCount++;
            return (
              <div>
                <MyCard
                  person={person}
                  key={person.id}
                  title={person.name}
                  url={apiImageData[index].download_url}
                  index={index}
                  resultsLen={apiData.results.length}
                  loadCount={loadCount}
                />
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <Button
            onClick={() => {
              changePage(num - 1);
            }}
            className="myButton"
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              changePage(num + 1);
            }}
            className="myButton"
          >
            Next
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>welcome to assignmet API</h1>
        </div>
        <Loading />
      </div>
    );
  }
};

export default ApiAssignment;
