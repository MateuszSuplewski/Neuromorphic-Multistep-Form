import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const languages = ['Angielski', 'Hiszpański', 'Francuski', 'Niemiecki']
const genders = ['Mężczyzna', 'Kobieta', 'Wole nie mówić']
const years = ['0', 'mniej niż 1', 'około 2', 'więcej niż 3']
const advanceLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const weekHours = ['5h', '10h', '15h', '20h', '25h', '30h']
const lessonIdeas = ['Ćwiczenie zadań z korepetytorem', 'Ćwiczenie samemu z gotowymi materiałami', 'Zapamiętywanie słówek oraz rozmowa z korepetytorem']

const pageOneData = {
  fields: [
    {
      fieldFor: 'input',
      placeholder: 'np. Piotr Kowalski',
      label: 'Imie i nazwisko',
      name: 'nameAndSurname',
      type: 'text',
      isRequired: true,
      pattern: /^([a-ząćęłńóśźż]{2,})\s([a-ząćęłńóśźż]{2,})$/i,
      error: 'Dane w polu Imie i nazwisko są niepoprawne - Ciąg minimum 4 znaków rozdzielony spacją'
    },
    {
      fieldFor: 'input',
      placeholder: 'np. abc@przyklad.com',
      label: 'Email',
      name: 'email',
      type: 'text',
      isRequired: true,
      pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
      error: 'Dane w polu Email są niepoprawne - Przykład.: example@domena.com'
    },
    {
      fieldFor: 'select',
      name: 'selectedGender',
      startValue: 'Select',
      optionsList: genders,
      question: 'Płeć',
      selectIcon: faAngleRight,
      isRequired: true
    },
    {
      fieldFor: 'select',
      name: 'selectedLanguage',
      startValue: 'Select',
      optionsList: languages,
      question: 'Wybierz język którego chcesz się nauczyć',
      selectIcon: faAngleRight,
      isRequired: true
    }
  ]
}

const pageTwoData = {
  fields: [
    {
      fieldFor: 'radio',
      name: 'yearsOfStudying',
      radiosFields: years,
      question: 'Przez ile lat uczyłaś/eś się języka'
    },
    {
      fieldFor: 'radio',
      name: 'writingLevel',
      radiosFields: advanceLevels,
      question: 'Na jakim poziomie posługujesz się językiem w piśmie'
    },
    {
      fieldFor: 'radio',
      name: 'speechLevel',
      radiosFields: advanceLevels,
      question: 'Na jakim poziomie posługujesz się językiem w mowie'
    }
  ]
}

const pageThreeData = {
  fields: [
    {
      fieldFor: 'select',
      name: 'selectedWeekHours',
      startValue: 'Select',
      optionsList: weekHours,
      question: 'Ile godzin w tygodniu jesteś w stanie poświęcić na naukę',
      selectIcon: faAngleRight,
      isRequired: true
    },
    {
      fieldFor: 'select',
      name: 'selectedLessonIdea',
      startValue: 'Select',
      optionsList: lessonIdeas,
      question: 'Jaki rodzaj nauki preferujesz',
      selectIcon: faAngleRight,
      isRequired: true
    },
    {
      fieldFor: 'radio',
      name: 'desiredLevel',
      radiosFields: advanceLevels,
      question: 'Do jakiego poziomu chciałbyś podnieść swój język'
    },
    {
      fieldFor: 'toggler',
      label: 'Akceptuje regulamin akademii językowej',
      name: 'acceptRegulations',
      isRequired: true,
      pattern: /true/,
      error: 'hello'
    },
    {
      fieldFor: 'toggler',
      label: 'Chce otrzymywać informacje o przyszłych promocjach oraz ofertach',
      name: 'acceptFutureOffers'
    }
  ]
}

const FormSendedPageData = {
  header: 'Formularz został wysłany!',
  paragraphs: [
    'Dziękujemy za wypełnienie formularza',
    'Oferta dostosowana do twoich potrzeb zostanie wygenerowana oraz wysłana w przeciągu 24h na podany w formularzu adres email',
    'Po więcej informacji lub szczególnych pytań prosimy dzwonić do naszego biura pod numerem 523-123-553'
  ]
}

const defaultInitialData = {
  nameAndSurname: '',
  email: '',
  selectedGender: '',
  selectedLanguage: '',
  yearsOfStudying: years[0],
  writingLevel: advanceLevels[0],
  speechLevel: advanceLevels[0],
  selectedWeekHours: '',
  selectedLessonIdea: '',
  desiredLevel: advanceLevels[0],
  acceptRegulations: 'false',
  acceptFutureOffers: 'false',
  pageNumber: 1,
  completedRequiredFields: 0
}

const formData = [pageOneData, pageTwoData, pageThreeData]

export { pageOneData, pageTwoData, defaultInitialData, pageThreeData, formData, FormSendedPageData }
