import React from 'react';
import '../styles/ItemBox.css';

interface ItemBoxProps {
  image: string;
  type: string;
  name: string;
  price: number;
  onViewDetail: () => void;
  onAddItem: () => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({ image, type, name, price, onViewDetail, onAddItem }) => {
  return (
    <div className="item-box">
      <img src={image} alt={name} className="item-image" />
      <div className="item-info">
        <span className="item-type">{type}</span>
        <h3 className="item-name">{name}</h3>
        <span className="item-price">${price.toFixed(2)}</span>
      </div>
      <div className="item-actions">
        <button className="view-detail-btn" onClick={onViewDetail}>ดูรายละเอียด</button>
        <button className="add-item-btn" onClick={onAddItem}>เพิ่มสินค้า</button>
      </div>
    </div>
  );
};

export default ItemBox;
