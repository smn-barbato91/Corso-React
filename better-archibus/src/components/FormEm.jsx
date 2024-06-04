
import {useState} from 'react'

function FormEm({em}) {

    const [nameFirst, setNameFirst] = useState(
        em ? em.name_first : ""
    )
    const [nameLast, setNameLast] = useState(
        em ? em.name_last : ""
    )
    const [email, setEmail] = useState(
        em ? em.email : ""
    )

  const submitHandle = () => {};



  return (
    <>
      <form className="ps-5 pt-3" onSubmit={submitHandle}>
        <h3>User Data</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name First
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={nameFirst}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name Last
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={nameLast}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}

export default FormEm;
