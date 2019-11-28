import React, { ReactElement } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";

interface IState {
  redirect: boolean;
  title: string;
}

class SearchForm extends React.Component<{}, IState> { 
  constructor({}){
    super({})
    this.state ={
      redirect: false,
      title: ""
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  public handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ title: e.target.value });
  }

  public handleKeyPress(e: any): any{
    if(e.key === 'Enter'){
      if(this.state.title !== ""){
        this.setState({ redirect: true });
      }
      else {
        alert("검색어를 입력해주세요")
        e.preventDefault();
      } 
    }
  }

  public render(): ReactElement {
    return ( 
      <div>
        {this.state.redirect ?
        <Redirect to={`/search/${this.state.title}`}/>
        :
        <div className="">
          <div className="search-i">
            <div>
                <a className="uk-navbar-toggle" href="#" uk-icon="search"></a>
                <div 
                  className="uk-navbar-dropdown" 
                  uk-drop="mode: click; cls-drop: uk-navbar-dropdown; boundary: !nav"
                >
                  <div className="uk-grid-small uk-flex-middle" uk-grid>
                      <div className="uk-width-expand">
                          <form className="uk-search uk-search-navbar uk-width-1-1">
                              <input 
                                className="uk-search-input" 
                                type="search" 
                                placeholder="Search..."
                                onChange={this.handleChangeTitle}
                                onKeyPress ={this.handleKeyPress} />
                          </form>
                      </div>
                      <div className="uk-width-auto">
                        <a className="uk-navbar-dropdown-close" href="#" uk-close></a>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>}
      </div>  
    ) 
  }
};

export default SearchForm;