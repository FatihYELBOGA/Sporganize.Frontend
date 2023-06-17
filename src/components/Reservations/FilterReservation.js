import { useState } from "react";
import "./Facility.css"

function FilterReservation({ facilityList, setFacilityList, allFacilities }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  function handleFilterButton(e) {
    e.preventDefault()
    console.log(allFacilities);
    setFacilityList(filterByPrice)
  }

  function filterByPrice() {
    facilityList = allFacilities;
    return facilityList.filter(facility => {
      return minPrice <= facility.price && facility.price <= maxPrice; 
    })
  }

  return (
      <div className="filter-reservation">
        <div className="filter-header">Filter</div>
        <div className="filter-price">
          <label>Price</label>
          <div className="single-price-input">
            <input type="number" value={minPrice} onChange={handleMinPrice}></input>
            <div className="filter-price-type">TL</div>
          </div>
          <div className="single-price-input">
            <input type="number" value={maxPrice} onChange={handleMaxPrice}></input>
            <div className="filter-price-type">TL</div>
          </div>
          <button className="filter-price-button" onClick={handleFilterButton}>Filter by Price</button>
        </div>
      </div>
  );
}

export default FilterReservation;