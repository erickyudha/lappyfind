import { createSlice } from '@reduxjs/toolkit'
const specConfig = {
    OFFICE: {
        processor_brand: 0,
        processor_name: 1,
        ram_gb: 4,
        ssd: 0,
        hdd: 512,
        graphic_card_gb: 0,
        Touchscreen: 0,
        template: 'custom'
    },
    SCHOOL: {
        processor_brand: 0,
        processor_name: 3,
        ram_gb: 8,
        ssd: 256,
        hdd: 0,
        graphic_card_gb: 0,
        Touchscreen: 0,
        template: 'custom'
    },
    EDITOR: {
        processor_brand: 0,
        processor_name: 3,
        ram_gb: 16,
        ssd: 512,
        hdd: 0,
        graphic_card_gb: 2,
        Touchscreen: 0,
        template: 'custom'
    },
    L_GAMING: {
        processor_brand: 0,
        processor_name: 3,
        ram_gb: 8,
        ssd: 256,
        hdd: 512,
        graphic_card_gb: 2,
        Touchscreen: 0,
        template: 'custom'
    },
    H_GAMING: {
        processor_brand: 1,
        processor_name: 4,
        ram_gb: 16,
        ssd: 512,
        hdd: 512,
        graphic_card_gb: 4,
        Touchscreen: 0,
        template: 'custom'
    },
}

export const specSlice = createSlice({
  name: 'spec',
  initialState: {
    value: {
        processor_brand: 0,
        processor_name: 0,
        ram_gb: 4,
        ssd: 0,
        hdd: 0,
        graphic_card_gb: 0,
        Touchscreen: 0,
        template: 'custom',
    }
  },
  reducers: {
    updateProcBrand(state, action) {
        if (state.processor_brand !== action.payload)
            if (parseInt(action.payload) === 0) {
                state.value = {
                    ...state.value,
                    processor_brand: 0,
                    processor_name: 0
                }
            }
            else {
                state.value = {
                    ...state.value,
                    processor_brand: 1,
                    processor_name: 2
                }
            }
    },
    updateProcName(state, action) {
        state.value.processor_name = parseInt(action.payload)
    },
    updateRam(state, action) {
        state.value.ram_gb = parseInt(action.payload);
    },
    updateSsd(state, action) {
        state.value.ssd = parseInt(action.payload);
    },
    updateHdd(state, action) {
        state.value.hdd = parseInt(action.payload);
    },
    updateGpu(state, action) {
        state.value.graphic_card_gb = parseInt(action.payload);
    },
    updateTouch(state, action) {
        state.value.Touchscreen = parseInt(action.payload);
    },
    updateTemplate: (state, action) => {
        const USE_LIST = [
          "office",
          "school",
          "editor",
          "l_gaming",
          "h_gaming"
        ]
        const useConfigMap = {
            "office": specConfig.OFFICE,
            "school": specConfig.SCHOOL,
            "editor": specConfig.EDITOR,
            "l_gaming": specConfig.L_GAMING,
            "h_gaming": specConfig.H_GAMING,
        }
        if (USE_LIST.includes(action.payload)) {
            state.value = useConfigMap[action.payload]
        }
      } 
  },
})

// Action creators are generated for each case reducer function
export const {
    updateGpu,
    updateHdd,
    updateProcBrand,
    updateProcName,
    updateRam,
    updateSsd,
    updateTouch,
    updateTemplate
} = specSlice.actions

export default specSlice.reducer;