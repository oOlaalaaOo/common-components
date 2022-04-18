import React, { useEffect, useMemo, useState } from 'react';
import AppSelectorIcon from '../../icons/selector-icon/selector-icon';
import AppInput from '../input';
import styles from './combo-box.module.scss';
import AppComboBoxOptions from './combo-box-options';

export interface OptionProps {
  id: string;
  label: string;
  value: string;
}

export interface AppComboBoxProps {
  value: string;
  options: OptionProps[];
  onSelect: (value: OptionProps) => void;
}

const AppComboBox = ({ value, options, onSelect }: AppComboBoxProps) => {
  const [selectedOption, setSelectedOption] =
    useState<OptionProps | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [showList, setShowList] = useState<boolean>(true);

  useEffect(() => {
    const filteredOption = options.filter((option) => option.value === value);

    if (filteredOption.length > 0) {
      setSelectedOption(filteredOption[0]);
      setInputValue(filteredOption[0].label);
    }
  }, [value]);

  useEffect(() => {
    if (showList === false && selectedOption) {
      setInputValue(selectedOption.label);
    }
  }, [showList]);

  const onClickSelector = () => setShowList((currentVal) => !currentVal);

  const onSelectOption = (option: OptionProps) => {
    setInputValue(option.label);
    setSelectedOption(option);
    setShowList(false);
    onSelect(option);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);
  };

  const filteredOptions = useMemo(() => {
    if (!inputValue) return options;

    return options.filter((option) =>
      String(option.label).includes(inputValue)
    );
  }, [options, inputValue]);

  return (
    <div className={styles['combo-box-container']}>
      <AppInput
        type='text'
        scale='sm'
        iconRight={<AppSelectorIcon />}
        iconRightClick={() => onClickSelector()}
        value={inputValue}
        onChange={onChangeInput}
      />
      {showList && (
        <AppComboBoxOptions
          selectedOption={selectedOption}
          options={filteredOptions}
          onSelectOption={onSelectOption}
        />
      )}
    </div>
  );
};

export default AppComboBox;
