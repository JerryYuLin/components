import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
       <div className="ui container comments">

          <ApprovalCard>
            Hello
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
               author="Sam"
               time="Today at 4:25AM"
               content="hey"
               image="https://picsum.photos/200"/>
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author="Alex"
              time="Today at 12:00PM"
              content="hello"
              image="https://picsum.photos/200"/>
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author="Jane"
              time="Just now"
              content="bye"
              image="https://picsum.photos/200"/>
          </ApprovalCard>
       </div> 
    );
}

const hello = () =>{
  return (
    <div>hello</div>
  );
}

ReactDOM.render( <App />, document.querySelector('#root'));
