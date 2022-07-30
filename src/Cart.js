

const Cart = ({ data }) => {
    return (
        <div className="col mb-5 cms">
        <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute sty">{data.title}</div>
          {/* Product image*/}
          <img
            className="card-img-top"
            src={`${data.img}`}
            alt="https://dummyimage.com/450x300/dee2e6/6c757d.jp"
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-start">
              {/* Product name*/}
              <h3 className="fw-bolder">{data.Title}</h3>
             { /*Product reviews*/}
                                          <div className="d-flex justify-content-center small text-warning mb-2">
                                              <div className="bi-star-fill"></div>
                                              <div className="bi-star-fill"></div>
                                              <div className="bi-star-fill"></div>
                                              <div className="bi-star-fill"></div>
                                              <div className="bi-star-fill"></div>
                                          </div>
              {/* Product price*/}
             <p className="price">{data.price}</p> 
            <p className="fprice">{data.Finalprice}</p> 
            <p>{data.seller}</p> 
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {/* {
                props.cartitems.some(obj=>obj.id ===props.data.id)
              } */}
               {/* <button disabled={props.addcart.some(obj=>obj.id ===props.data.id)} onClick={()=>props.handleAddtoCart(props.data.id)} className="btn btn-dark">
               Add to Cart
              </button>  */}
            </div>
          </div>
        </div>
      </div>
    //   <table>
    //     <tbody>
    //       <tr>
    //         <th>Name</th>
    //         <th>Surname</th>
    //         <th>Email</th>
    //       </tr>
    //       {data.map((item) => (
    //         <tr key={item.id}>
    //           <td>{item.first_name}</td>
             
    //           <td>{item.last_name}</td>
    //           <td>{item.email}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    );
  };
  
  export default Cart;