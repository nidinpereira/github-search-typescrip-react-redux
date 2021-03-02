import React from 'react';
import { SearchPage } from './pages/search/search.page';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <main>
          <SearchPage/>
        </main>
        <footer/>
      </div>
    );
  }
}


