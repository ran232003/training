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
    EffectiveDate: "2023-07-14T14:00:00+03:00",
    EffectiveEpochDate: 1689332400,
    Severity: 4,
    Text: "Danger of dehydration and heat stroke if outside for extended periods of time Friday afternoon",
    Category: "heat",
    EndDate: "2023-07-14T20:00:00+03:00",
    EndEpochDate: 1689354000,
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2023-07-14T07:00:00+03:00",
      EpochDate: 1689307200,
      Temperature: {
        Minimum: {
          Value: 78,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 94,
          Unit: "F",
          UnitType: 18,
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
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    },
    {
      Date: "2023-07-15T07:00:00+03:00",
      EpochDate: 1689393600,
      Temperature: {
        Minimum: {
          Value: 78,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 91,
          Unit: "F",
          UnitType: 18,
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
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    },
    {
      Date: "2023-07-16T07:00:00+03:00",
      EpochDate: 1689480000,
      Temperature: {
        Minimum: {
          Value: 77,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 92,
          Unit: "F",
          UnitType: 18,
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
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    },
    {
      Date: "2023-07-17T07:00:00+03:00",
      EpochDate: 1689566400,
      Temperature: {
        Minimum: {
          Value: 77,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 93,
          Unit: "F",
          UnitType: 18,
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
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    },
    {
      Date: "2023-07-18T07:00:00+03:00",
      EpochDate: 1689652800,
      Temperature: {
        Minimum: {
          Value: 77,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 92,
          Unit: "F",
          UnitType: 18,
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
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
    },
  ],
};
