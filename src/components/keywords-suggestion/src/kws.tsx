import * as React from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { KWSContainer } from './style';
interface Option {
  _id: string;
  value: string;
}
interface KWSOptions {
  options: Option[];
  initialData?: Option[];
  setNewData: (dep: Option[]) => void;
}
export const KWS: React.FC<KWSOptions> = ({
  options,
  initialData,
  setNewData,
}) => {
  // create reference to the component
  const ref = React.useRef(null);
  // hide show options
  const [hideOptions, setHideOptions] = React.useState<boolean>(false);
  // selected data that displayed in the chosen list
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>(
    initialData || []
  );
  // initialize list of all options
  const [initialOptions, setInitialOptions] = React.useState<Option[]>(options.concat(initialData || []));
  // this will used to filter options
  const [filteredList, setFilteredList] = React.useState<Option[]>([]);

  // hooks
  useOnClickOutside(ref, (e: Event) => setHideOptions(false));
  // components functions
  const updateOptionsList = (opt: Option) => {
    setSelectedOptions([...selectedOptions, opt])
    // remove from selection list
    setInitialOptions(initialOptions.filter(({ _id }: Option) => _id !== opt._id))
  };

  const removeFromSelected = (opt: Option) => {
    if (initialData) setNewData(initialData.filter((e: Option) => e._id !== opt._id));
    // remove from selection list
    setSelectedOptions(selectedOptions.filter(({ _id }: Option) => _id !== opt._id));
    // add to option list
    if (!initialOptions.includes(opt)) setInitialOptions([...initialOptions, opt]);
    !!filteredList.length && setFilteredList([...filteredList, opt]);
  };

  React.useEffect(() => {
    if (initialData)
      setInitialOptions(
        options.filter(
          (el: Option) =>
            !initialData.find(
              ({ _id }: Option) => el._id.toString() === _id.toString()
            )
        )
      );
  }, [options]);


  console.log('initialOptions', initialOptions)

  return (
    <KWSContainer className="multiSelectContainer" ref={ref}>
      {/* input to enter a filter or a search word */}
      <div className="search-wrapper searchWrapper">
        {!!selectedOptions.length &&
          selectedOptions.map((s: Option) => (
            <span className="chip" key={s._id}>
              {s.value.toUpperCase()}
              <i
                className="fas fa-times-circle icon-cancel closeIcon"
                onClick={() => removeFromSelected(s)}
              />
            </span>
          ))}
        <input
          className="searchBox"
          onFocus={() => setHideOptions(true)}
          placeholder="ajouter"
          onChange={({ target }: any) =>
            setFilteredList(
              initialOptions.filter(({ value }: Option) =>
                value.toLowerCase().includes(target.value.toLowerCase())
              )
            )
          }
        />
      </div>

      {/* menu rapid access filter */}

      {/* list dropdown of a suggested words */}
      {hideOptions && (
        <div className="optionListContainer">
          {!filteredList.length && (
            <ul className="optionContainer">
              {initialOptions.map((st: Option) => (
                <li onClick={(e) => updateOptionsList(st)} key={st._id}>
                  <i className='fas fa-caret-right' /> {st.value.toUpperCase()}
                </li>
              ))}
            </ul>
          )}
          {!!filteredList.length && (
            <ul className="optionContainer">
              {filteredList.map((st: Option) => (
                <li onClick={(e) => updateOptionsList(st)} key={st._id}>
                  {'>'} {st.value.toUpperCase()}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </KWSContainer>
  );
};
