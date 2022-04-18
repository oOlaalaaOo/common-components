import React from 'react';
import { OptionProps } from './combo-box';
import AppComboxOption from './combo-box-option';
import styles from './combo-box-options.module.scss';

interface AppComboBoxOptionsProps {
  selectedOption: OptionProps | null;
  options: OptionProps[];
  onSelectOption: (option: OptionProps) => void;
}

const AppComboBoxOptions = ({
  selectedOption,
  options,
  onSelectOption,
}: AppComboBoxOptionsProps) => {
  return (
    <div className={styles['list-container']}>
      {options.map((option) => {
        return (
          <AppComboxOption
            key={option.id}
            selectedOption={selectedOption}
            option={option}
            onSelect={onSelectOption}
          />
        );
      })}
    </div>
  );
};

export default AppComboBoxOptions;
