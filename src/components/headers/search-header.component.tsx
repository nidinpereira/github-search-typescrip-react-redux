import React from "react";
import "./search-header-component.scss";
export function SearchHeader () {
    return (
        <div className='search-header'>
            <img src='github.svg' className='logo' alt='header logo' />
            <div className='search-header-title'>
          <span className='search-header-title-color--black bold big-font'>
            Github Searcher
          </span>
                <span className='search-header-title-color--grey'>
            search user or repositories below
          </span>
            </div>
        </div>
    )
}
