export const MockLocation = {
  Version: 1,
  Key: "215694",
  Type: "City",
  Rank: 75,
  LocalizedName: "Lahav",
  EnglishName: "Lahav",
  PrimaryPostalCode: "",
  Region: {
    ID: "MEA",
    LocalizedName: "Middle East",
    EnglishName: "Middle East",
  },
  Country: {
    ID: "IL",
    LocalizedName: "Israel",
    EnglishName: "Israel",
  },
  AdministrativeArea: {
    ID: "D",
    LocalizedName: "Southern District",
    EnglishName: "Southern District",
    Level: 1,
    LocalizedType: "District",
    EnglishType: "District",
    CountryID: "IL",
  },
  TimeZone: {
    Code: "IDT",
    Name: "Asia/Jerusalem",
    GmtOffset: 3,
    IsDaylightSaving: true,
    NextOffsetChange: "2023-10-28T23:00:00Z",
  },
  GeoPosition: {
    Latitude: 31.378,
    Longitude: 34.874,
    Elevation: {
      Metric: {
        Value: 486,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 1594,
        Unit: "ft",
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "DailyPollenForecast",
    "ForecastConfidence",
    "FutureRadar",
    "MinuteCast",
  ],
};
export const currentWeather = [
  {
    LocalObservationDateTime: "2023-07-15T10:47:00+03:00",
    EpochTime: 1689407220,
    WeatherText: "Sunny",
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 29,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 84,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  },
];
export const fiveDays = {
  Headline: {
    EffectiveDate: "2023-07-15T14:00:00+03:00",
    EffectiveEpochDate: 1689418800,
    Severity: 7,
    Text: "Humid Saturday afternoon to late Sunday night",
    Category: "humidity",
    EndDate: "2023-07-17T08:00:00+03:00",
    EndEpochDate: 1689570000,
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2023-07-15T07:00:00+03:00",
      EpochDate: 1689393600,
      Temperature: {
        Minimum: {
          Value: 25.9,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 33.1,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
    },
    {
      Date: "2023-07-16T07:00:00+03:00",
      EpochDate: 1689480000,
      Temperature: {
        Minimum: {
          Value: 25.5,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 33.1,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
    },
    {
      Date: "2023-07-17T07:00:00+03:00",
      EpochDate: 1689566400,
      Temperature: {
        Minimum: {
          Value: 26,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 33.8,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
    },
    {
      Date: "2023-07-18T07:00:00+03:00",
      EpochDate: 1689652800,
      Temperature: {
        Minimum: {
          Value: 25.7,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 33,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
    },
    {
      Date: "2023-07-19T07:00:00+03:00",
      EpochDate: 1689739200,
      Temperature: {
        Minimum: {
          Value: 24.7,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 32,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
    },
  ],
};
export const autoCompleteMock = [
  {
    Version: 1,
    Key: "213225",
    Type: "City",
    Rank: 30,
    LocalizedName: "Jerusalem",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "JM",
      LocalizedName: "Jerusalem",
    },
  },
  {
    Version: 1,
    Key: "329548",
    Type: "City",
    Rank: 35,
    LocalizedName: "Jersey City",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "NJ",
      LocalizedName: "New Jersey",
    },
  },
  {
    Version: 1,
    Key: "306735",
    Type: "City",
    Rank: 42,
    LocalizedName: "Jerez de la Frontera",
    Country: {
      ID: "ES",
      LocalizedName: "Spain",
    },
    AdministrativeArea: {
      ID: "AN",
      LocalizedName: "Andalusia",
    },
  },
  {
    Version: 1,
    Key: "465",
    Type: "City",
    Rank: 51,
    LocalizedName: "Jeremie",
    Country: {
      ID: "HT",
      LocalizedName: "Haiti",
    },
    AdministrativeArea: {
      ID: "GA",
      LocalizedName: "Grande Anse",
    },
  },
  {
    Version: 1,
    Key: "224190",
    Type: "City",
    Rank: 51,
    LocalizedName: "Jerash",
    Country: {
      ID: "JO",
      LocalizedName: "Jordan",
    },
    AdministrativeArea: {
      ID: "JA",
      LocalizedName: "Jerash",
    },
  },
  {
    Version: 1,
    Key: "244895",
    Type: "City",
    Rank: 55,
    LocalizedName: "Jerada",
    Country: {
      ID: "MA",
      LocalizedName: "Morocco",
    },
    AdministrativeArea: {
      ID: "02",
      LocalizedName: "l'Oriental",
    },
  },
  {
    Version: 1,
    Key: "232887",
    Type: "City",
    Rank: 55,
    LocalizedName: "Jerécuaro",
    Country: {
      ID: "MX",
      LocalizedName: "Mexico",
    },
    AdministrativeArea: {
      ID: "GUA",
      LocalizedName: "Guanajuato",
    },
  },
  {
    Version: 1,
    Key: "3558846",
    Type: "City",
    Rank: 55,
    LocalizedName: "Jerez",
    Country: {
      ID: "MX",
      LocalizedName: "Mexico",
    },
    AdministrativeArea: {
      ID: "ZAC",
      LocalizedName: "Zacatecas",
    },
  },
  {
    Version: 1,
    Key: "236610",
    Type: "City",
    Rank: 55,
    LocalizedName: "Jerez de García Salinas",
    Country: {
      ID: "MX",
      LocalizedName: "Mexico",
    },
    AdministrativeArea: {
      ID: "ZAC",
      LocalizedName: "Zacatecas",
    },
  },
  {
    Version: 1,
    Key: "313422",
    Type: "City",
    Rank: 65,
    LocalizedName: "Jerablus",
    Country: {
      ID: "SY",
      LocalizedName: "Syria",
    },
    AdministrativeArea: {
      ID: "HL",
      LocalizedName: "Aleppo",
    },
  },
];
