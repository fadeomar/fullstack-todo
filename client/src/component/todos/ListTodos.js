import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { TodoList } from './Styles';
import Model from './Model';


const ListTodos = () => {
  const [showModal, setshowModal] = useState(false);

  const handleShowModal = () => {
    setshowModal(true);
  }

  const handleCloseModal = () => {
    setshowModal(false);
  }
  return (
    <Layout>
            <TodoList>
        {showModal && <Model closeModal={handleCloseModal} />}
        <div className="container">
          <div className="row">
            <div className="col-md-12 header text-center mt-3">
              <h1>My Todos</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-primary float-right" onClick={handleShowModal}>New</button>
            </div>
          </div>
        </div>
      </TodoList>

    </Layout>
  )
}

export default ListTodos;