import React, { useState } from "react";
import InputAddress from "react-thailand-address-autocomplete";

const testt = () => {
  const [fullAddress, setFulladdDress] = useState({});

  console.log(fullAddress);
  const onChange = (e) => {
    setFulladdDress({
      ...fullAddress,
      [e.target.name]: e.target.value,
    });
  };

  const onSelect = (fullAddress) => {
    setFulladdDress(fullAddress);
  };
  return (
    <div>
      จังหวัด

      <InputAddress
        address="province"
        value={fullAddress.province}
        onChange={onChange}
        onSelect={onSelect}
      />

      แขวง / ตำบล
      <InputAddress
        address="subdistrict"
        value={fullAddress.subdistrict}
        onChange={onChange}
        onSelect={onSelect}
      />
      เขต / อำเภอ
      <InputAddress
        address="district"
        value={fullAddress.district}
        onChange={onChange}
        onSelect={onSelect}
      />

      รหัสไปรษณีย์
      <InputAddress
        address="zipcode"
        value={fullAddress.zipcode}
        onChange={onChange}
        onSelect={onSelect}
      />
    </div>
    
  );
};

export default testt;
