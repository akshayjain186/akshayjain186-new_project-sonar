import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SendInvitationForm() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Send Invitation</h2>
        <p className="text-center mb-4">
        Invitation to the portal will be sent via customer e-mail. Check whether it’s right and change if necessary 
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Customer e-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="container d-flex justify-content-center align-items-center ">
          <button type="submit" className="btn btn-primary w-50 " style={{backgroundColor:'#41619A'}}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}