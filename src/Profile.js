import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Profile = () => {
  const perPage = 10;
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const getUserList = () => {
      setLoading(true);
      fetch(`https://randomuser.me/api/?page=${page}&results=${perPage}`)
        .then((res) => res.json())
        .then((res) => {
          setUserList((prevUserList) => [...prevUserList, ...res.results]);
          setTotalPages(res.info.page);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    };

    getUserList();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container-fluid">
      <div class="mb-3">
        <label for="First name" class="form-label">
          First Name
        </label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          name="firstName"
          placeholder="Enter First name"
          value={selectedUser ? selectedUser.name.first : ''}
          readOnly
        />
      </div>
      <div class="mb-3">
        <label for="Last Name" class="form-label">
          Last Name
        </label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          name="lastName"
          placeholder="Enter Last Name"
          value={selectedUser ? selectedUser.name.last : ''}
          readOnly
        />
      </div>
      <div class="mb-3">
        <label for="Email" class="form-label">
          Email
        </label>
        <input
          type="text"
          class="form-control"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={selectedUser ? selectedUser.email : ''}
          readOnly
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: perPage }).map((_, index) => (
                <tr key={index}>
                  <td><Skeleton /></td>
                  <td><Skeleton /></td>
                  <td><Skeleton /></td>
                  <td><Skeleton /></td>
                  <td><Skeleton /></td>
                </tr>
              ))
            : userList.map((user) => (
                <tr key={user.login.uuid} onClick={() => handleRowClick(user)}>
                  <td>{user.login.uuid}</td>
                  <td>
                    <img src={user.picture.thumbnail} alt="Avatar" />
                  </td>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="btn-prev" onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span className="page-info">Page {page} of {totalPages}</span>
        <button className="btn-next" onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Profile;