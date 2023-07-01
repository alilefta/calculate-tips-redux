/* eslint-disable no-unused-vars */

export const TIP_UPDATED = "TIP_UPDATED";

export const updateTip = (tip) => ({
	type: TIP_UPDATED,
	payload: tip,
});
