import React from "react";
import GermanHoliday from "../components/german-holiday";
import ItalianHoliday from "../components/italian-holiday";
import RussianHolidays from "../components/russian-holiday";
import HolidayList from "../components/holiday-list";
import { Switch, Route } from "react-router-dom";
import MainPage from "../components/main-page";
import EnglishHoliday from "../components/english-holiday";

const Content = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/serbian" component={HolidayList}></Route>
        <Route exact path="/russian" component={RussianHolidays}></Route>
        <Route exact path="/italian" component={ItalianHoliday}></Route>
        <Route exact path="/german" component={GermanHoliday}></Route>
        <Route exact path="/uk" component={EnglishHoliday}></Route>
      </Switch>
    </>
  );
};

export default Content;
