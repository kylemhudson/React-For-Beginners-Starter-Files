import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <React.Fragment>
           <form className="store-selector">
              <h2> Please enter your store name: 
              </h2>
               <input type="text" required placeholder="Enter name"/>
               <button type="submit">Visit Store</button>
           </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;