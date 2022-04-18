import React, { useState } from 'react';
import AppCheckIcon from '../../icons/check-icon/check-icon';
import { OptionProps } from './combo-box';
import styles from './combo-box-option.module.scss';

interface OptionItemProps {
  option: OptionProps;
  selectedOption: OptionProps | null;
  onSelect: (option: OptionProps) => void;
}

const AppOptionItem = ({
  option,
  selectedOption,
  onSelect,
}: OptionItemProps) => {
  const [checkIconColor, setCheckIconColor] = useState<'#fff' | '#000'>('#000');

  const onSelectOption = (option: OptionProps) => onSelect(option);

  return (
    <div
      data-id={option.id}
      data-value={option.value}
      onClick={() => onSelectOption(option)}
      className={styles['list-item']}
      onMouseOver={() => setCheckIconColor('#fff')}
      onMouseLeave={() => setCheckIconColor('#000')}
    >
      <span className={styles['list-item-icon']}>
        {selectedOption && selectedOption.value === option.value && (
          <AppCheckIcon stroke={checkIconColor} />
        )}
      </span>
      <span className={styles['list-item-label']}>{option.label}</span>
    </div>
  );
};

export default AppOptionItem;
