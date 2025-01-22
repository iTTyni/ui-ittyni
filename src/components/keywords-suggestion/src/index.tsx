import * as React from 'react';
import { KWContainer } from './style';

export const KeyWordSugg: React.FC<any> = ({ title, suggestedWords, column, searchTest, components, setComponents }) => {
  // enable edit
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true)
  // get data from inputs
  const [departements, setDepartements] = React.useState<string[]>(components || [])
  // get data from inputs
  const [departement, setDepartement] = React.useState<string>('')
  // clear input after add departement
  const clearInput = () => setDepartement('');

  // handle text entry
  const handleEntry = (e: any) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      let newDepartements = departements;
      newDepartements.push(e.target.value);
      setDepartements(newDepartements);
      clearInput();
    }
  }
  // update father component
  React.useEffect(() => {
    setComponents(departements);
  }, [departements])
  return (
    <div>
      <KWContainer column={column}>
        <label>{title} :</label>
        {departements && departements.length > 0 && typeof (departements[0]) == 'string' && departements.map((d) =>
          <span key={d}>
            <span>{d}</span>
            <i
              style={{ cursor: 'pointer', fontSize: 'smaller' }}
              className="fas fa-times"
              onClick={(e: any) => setDepartements(departements.filter((f: string) => f != d))}
            />
          </span>
        )}
        {departements && departements.length > 0 && typeof (departements[0]) == 'object' && departements.map((d: any) =>
          <span key={d.id}>
            <span>{d.name.fr}</span>
            <i
              style={{ cursor: 'pointer', fontSize: 'smaller' }}
              className="fas fa-times"
              onClick={(e: any) => setDepartements(departements.filter((f: any) => f.id != d.id))}
            />
          </span>
        )}
        <div>
          {/**====== data input field ========*/}
          <input
            type="text" onChange={({ target }) => {
              setDepartement(target.value)
              searchTest && searchTest(target.value)
            }}
            value={departement} onKeyDown={e => handleEntry(e)}
            placeholder={'Ajouter autre'}

          />
          {/**====== data suggested list ========*/}
          {departement.length > 0 &&
            <ul>
              {suggestedWords && typeof (suggestedWords[0]) == 'string' && suggestedWords
                .filter((dep: string) => dep.toLowerCase().match(departement.toLowerCase()))
                .map((newSug: string) =>
                  <li onClick={(e: any) => {
                    setDepartements([...departements, newSug]);
                    clearInput();
                  }}>{newSug}</li>
                )}
              {suggestedWords && typeof (suggestedWords[0]) == 'object' && suggestedWords
                .map((newSug: any) =>
                  <li onClick={(e: any) => {
                    setDepartements([...departements, newSug]);
                    clearInput();
                  }}>
                    <div className="mnemonic">{newSug.reference.Mnemonic}</div>
                    <div className="name">{newSug.name.fr}</div>
                  </li>
                )}
            </ul>
          }
        </div>
      </KWContainer>
    </div>
  );
};
