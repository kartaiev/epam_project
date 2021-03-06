import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/styles';
import React, { useContext } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { background, grey, red, yellow } from '../../../../utilities';
import { ReserveContext } from '../../../../contexts/ReserveContext';

const materialTheme = createMuiTheme({
  overrides: {
    MuiDialogActions: {
      root: {
        backgroundColor: yellow,
        color: background
      }
    },

    MuiButtonBase: {
      root: {
        cursor: 'pointer'
      }
    },

    MuiButton: {
      root: {
        cursor: 'pointer'
      },
      label: {
        color: background
      }
    },

    MuiInputBase: {
      root: {
        color: grey,
        border: `${yellow} solid 1px`,
        width: '100%',
        cursor: 'pointer'
      },
      input: {
        color: grey,
        textAlign: 'center',
        width: '100%'
      }
    },

    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: yellow
      }
    },

    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: grey,
        color: background
      },
      daysHeader: {
        background: grey,
        color: background
      }
    },

    MuiTabs: {
      flexContainer: {
        backgroundColor: yellow
      }
    },

    MuiFormControl: {
      root: {
        width: '300px',
        cursor: 'pointer'
      }
    },

    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: red
      },
      thumb: {
        borderColor: red
      }
    },

    PrivateNotchedOutline: {
      root: {
        border: `${yellow} solid 1px`
      }
    },

    MuiPickersClock: {
      pin: {
        backgroundColor: red
      }
    },

    MuiPaper: {
      root: {
        backgroundColor: grey
      }
    },

    MuiPickersSlideTransition: {
      transitionContainer: {
        backgroundColor: grey
      }
    },
    MuiPickersDay: {
      day: {
        color: background
      },
      daySelected: {
        backgroundColor: red,
        color: grey
      },
      dayDisabled: {
        color: grey
      },
      current: {
        color: red
      }
    }
  }
});

export const DatePick = () => {
  const { dateSelected, setDateSelected } = useContext(ReserveContext);
  let date = new Date();

  return (
    <ThemeProvider theme={materialTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePicker
          minDate={new Date()}
          maxDate={date.setDate(date.getDate() + 7)}
          inputVariant="outlined"
          value={dateSelected}
          onChange={date => setDateSelected(date)}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};
