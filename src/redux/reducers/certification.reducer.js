/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

const { CERTIFICATION_INFO } = require("../actionTypes");

const initialState = { loading: false, error: "", certifications: [] };

const certificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CERTIFICATION_INFO.UPDATE_STATE: {
      return { ...state, certifications: action.payload };
    }
    case CERTIFICATION_INFO.SERVER_REQUEST: {
      return { ...state, loading: true };
    }
    case CERTIFICATION_INFO.FETCH_SUCCESS: {
      return {
        ...state,
        certifications: action.payload,
        loading: false,
      };
    }
    case CERTIFICATION_INFO.SERVER_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default certificationReducer;
