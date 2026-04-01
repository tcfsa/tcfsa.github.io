let addressesXurls = [];

let aXu_others = [
	
	["/d-p", "https://drive.google.com/drive/folders/100sHKEs5lAdWoDZjxesw7GwibhQY5r7M?usp=sharing"],

	["/a1", "https://drive.google.com/drive/folders/1FmS3pFvWcfHvP_aLFMY6Icfe6nV-5_qg"],
	["/a2", "https://drive.google.com/drive/folders/1wnJgrB-ADvwvKkuyk8baLPrEvAbZJCQI"],
	["/a3", "https://drive.google.com/drive/folders/1nlET-ECxWim0cSlkscXt1Kuvwz1BtjPf"],
	["/a4", "https://mega.nz/folder/K4500IjB#4OrXSVRCXG2ddZlwVT25FQ"]

];

let aXu_eer_s6 = [

	["/eer", "https://drive.google.com/drive/folders/1ezipmG2DJJOR6dCOaEP_5zZzpLDI0Ck5?usp=sharing"],
	["/mecflu"			, "https://drive.google.com/drive/folders/1HrFXrIDzUDIsT8tvm8n9CLWrjPxrspy9?usp=sharing"],
	["/eer-chaquis"		, "https://drive.google.com/drive/folders/1C20BR0w50DT8dOxuyk3VJ-gzNH0JiOzC?usp=sharing"],
	["/trtherm"			, "https://drive.google.com/drive/folders/1pK0xzw1z7GrSOXXX3WHt01Rckyd3oEM8?usp=sharing"],
	["/eer-automat"		, "https://drive.google.com/drive/folders/1pUq18-aCPMfMXS3Bh3AuvibnwZE6Hd8I?usp=sharing"],
	["/photoeol"		, "https://drive.google.com/drive/folders/1dHf1UBru9Q29zjoXvaWoGQmEOpLtUWuA?usp=sharing"],
	["/s6-eer-lngetr4"	, "https://drive.google.com/drive/folders/1Ttk2ngiAT-9qxXhRTIcX6Y0_QVrOb3CG?usp=sharing"],
	["/eer-entrepr"		, "https://drive.google.com/drive/folders/1cADemGj95vqL37-9O1LqOCn3xH21gsHN?usp=sharing"],

	["/p/s6/eer/photoeol/cours/livre energie solaire photovoltaïque.pdf", "https://drive.google.com/uc?id=14qtMpCHH5Yy4kyL7ksXxbafD4yzDhpd8"],
	["/p/s6/eer/photoeol/cours/ines.pdf", "https://drive.google.com/uc?id=1VYosXGR2N7uUXwosNLq80wiK7tOXFSMA"],
	["/p/s6/eer/photoeol/cours/partie 1 - chapt 1.pdf", "https://drive.google.com/uc?id=1a-Wz3-SN37PKXGztc-pUU7MY2ozz00p0"],
	["/p/s6/eer/photoeol/cours/partie 1 - chapt 2.pdf", "https://drive.google.com/uc?id=1Oiq2WT4PwykKSnkxR5Rzh6AuJ-JDoVGP"],
	["/p/s6/eer/photoeol/cours/partie 1 - chapt 3.pdf", "https://drive.google.com/uc?id=1W0-GqGKixJzr9yolfUcdBUkAITgWmgYi"],
	["/p/s6/eer/photoeol/cours/partie 2 - chapt 1.pdf", "https://drive.google.com/uc?id=1aRYboSMiaX1u2d5VICHwH_-Ladm1eaWK"],
	["/p/s6/eer/photoeol/cours/partie 2 - chapt 2.pdf", "https://drive.google.com/uc?id=1i1opB10Zf5WkSpijnnDYxV_jE6n-rj5L"],
	["/p/s6/eer/photoeol/cours/partie 2 - chapt 3.pdf", "https://drive.google.com/uc?id=1OukG2LIA2Wm4UzrAreyCYrfBn-RM7kTE"],
	["/p/s6/eer/photoeol/cours/partie 2 - chapt 4.pdf", "https://drive.google.com/uc?id=1-jlQ29dXF0R7J0rer9ZNfusme2BOgy2W"],
	["/p/s6/eer/photoeol/cours/remarque (cours pv ines).jpg", "https://drive.google.com/uc?id=1lHaPM6YQwHw5VDx2k_CyDkhr8k3rx3Qk"],
	["/p/s6/eer/photoeol/cours/remarque 1.jpeg", "https://drive.google.com/uc?id=1H7OVKpOjW9hf-utHxe23TgO2j50EhNKf"],
	["/p/s6/eer/photoeol/cours/remarque 2.jpeg", "https://drive.google.com/uc?id=1CS4AnsoZeBlkRopNHuKOQqkMwU8quuTv"],
	["/p/s6/eer/photoeol/tds/td1 - rappels.pdf", "https://drive.google.com/uc?id=1f4QXdLeKivyJ_0OPx7lb6u2_xbBP4HP5"],
	["/p/s6/eer/photoeol/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1loY9GX48R_FQJOUu1gs6vHnMMV6Em7Ua"],
	["/p/s6/eer/photoeol/tds/td1 corrigé.pdf", "https://drive.google.com/uc?id=1UY0tc3XiZ2p5JqXwkPGkAeAicogOqA1K"],
	["/p/s6/eer/photoeol/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1kn_MhJgRJNjJWV748cGlEPdUbAk7egBF"],
	["/p/s6/eer/photoeol/tds/corrigé + rappels.pdf", "https://drive.google.com/uc?id=1yShNHKr7YPPLRpK8nI-HMrXLdDDcaY4u"],
	["/p/s6/eer/photoeol/tds/td3 - énoncé.pdf", "https://drive.google.com/uc?id=1DLJlVWZvSUS5ylBsLrJvy-gayu0H3HHH"],
	["/p/s6/eer/photoeol/tds/td3 - corrigé + rappels.pdf", "https://drive.google.com/uc?id=1LzspfL1oeQ2G8JZ-ndCVu9BEwAZDOf25"],
	["/p/s6/eer/photoeol/tps/support des tps (twodiodemoodel).pdf", "https://drive.google.com/uc?id=1gkDlU5RvNQvGy2Di0OSQJrCT76isfzTJ"],
	["/p/s6/eer/photoeol/tps/compte rendu.pdf", "https://drive.google.com/uc?id=11rg8HCyCayRMKZWR6JLY6Bo2UJtBXcFd"],
	["/p/s6/eer/photoeol/tps/tp1 - énoncé.pdf", "https://drive.google.com/uc?id=1sK8kMKmTLPE1_7pLxxHSdavGxD5AAet0"]
];

let aXu_es_s6 = [

	["/es", "https://drive.google.com/drive/folders/18S0ghGi_SNV8gb2WtjqFFvPdbou08qiH?usp=sharing"],
	["/trasign"			, "https://drive.google.com/drive/folders/1MUyXsuzWmoTdG29nZIB6oCCeI_m0lpZJ?usp=sharing"],
	["/es-chaquis"		, "https://drive.google.com/drive/folders/1yAHC_RwPExa8WJUX0f00CqAnQiaf3KDL?usp=sharing"],
	["/sysmicr"			, "https://drive.google.com/drive/folders/1po1_4YlfzijK4InXhJuAEqRyDmXPTIg4?usp=sharing"],
	["/es-automat"		, "https://drive.google.com/drive/folders/1Prd259Fdt0ZyjjRGve9alwU0am9UCW8g?usp=sharing"],
	["/elncom"			, "https://drive.google.com/drive/folders/1HbPO6uOGcmpnAMVTDtRfTDwYiBtv3WzR?usp=sharing"],
	["/s6-es-lngetr4"	, "https://drive.google.com/drive/folders/1cw5o9JkQMBWea1_J6uPNYCEir_F1JznC?usp=sharing"],
	["/es-entrepr"		, "https://drive.google.com/drive/folders/12LXN56LK_k2a_t2T4s4KCajJvI0FT3pA?usp=sharing"],


	["/systp"			, "https://drive.google.com/file/d/1eQBnD2KdOPZUIWUdzXxnBpYphbBWSWgP/view?usp=sharing"],
	["/syscours"			, "https://drive.google.com/file/d/1EFC7NxIItFFyNBy8apUHMDfn7j8cFV1r/view?usp=sharing"],
	["/syscour"			, "https://drive.google.com/file/d/1EFC7NxIItFFyNBy8apUHMDfn7j8cFV1r/view?usp=sharing"],
	["/microtp"			, "https://drive.google.com/file/d/1eQBnD2KdOPZUIWUdzXxnBpYphbBWSWgP/view?usp=sharing"],
	["/microcours"			, "https://drive.google.com/file/d/1EFC7NxIItFFyNBy8apUHMDfn7j8cFV1r/view?usp=sharing"],
	["/microcour"			, "https://drive.google.com/file/d/1EFC7NxIItFFyNBy8apUHMDfn7j8cFV1r/view?usp=sharing"],
	["/p/s6/es/sysmicr/cours/cours (polycopié).pdf", "https://drive.google.com/uc?id=1EFC7NxIItFFyNBy8apUHMDfn7j8cFV1r"],
	["/p/s6/es/sysmicr/cours/chapt 1.pdf", "https://drive.google.com/uc?id=17m5VRlBWGV5oie3D70rEJryRY0tpZMmX"],
	["/p/s6/es/sysmicr/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=11ngHakMxyErBHqRNZa3OmIZTeXqMOzEf"],
	["/p/s6/es/sysmicr/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1HZjjUZ-F-VAY8ZM_LIkej6Qo9KxhFm86"],
	["/p/s6/es/sysmicr/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=186Fmqa3X4NUT9LYgfjmVnPDarFCTmOzx"],
	["/p/s6/es/sysmicr/tds/td3 - énoncé.pdf", "https://drive.google.com/uc?id=1PPW-2iFtQRdE7ukTvkpAEyU-lxoAtlUC"],
	["/p/s6/es/sysmicr/tps/support des tps.pdf", "https://drive.google.com/uc?id=1eQBnD2KdOPZUIWUdzXxnBpYphbBWSWgP"],
	["/p/s6/es/sysmicr/tps/tp1 - corrigé (version 1).pdf", "https://drive.google.com/uc?id=12LtBv3URYoQ-8JU4CnZ_sVys01EwPpL1"],
	["/p/s6/es/sysmicr/tps/tp1 - corrigé (version 2).pdf", "https://drive.google.com/uc?id=1CXdFUtqosmOdAkB-lAinXt1AIvsnxAFG"],
	["/p/s6/es/sysmicr/tps/tp2 - codes.pdf", "https://drive.google.com/uc?id=1AtDhA5tN7kpUK7TwXIppHbN0DtdOMxVn"],

	["/p/s6/es/trasign/cours/2023 - 2024/polycopié.pdf", "https://drive.google.com/uc?id=1B9YEsvoBnakTgfmdDdgLr1z47Aob4nKQ"],
	["/p/s6/es/trasign/cours/2023 - 2024/polycopié_compressed.pdf", "https://drive.google.com/uc?id=1VQOlIivUGBo3_6uQeTP_hkjlULW_P8W8"],

	["/p/s6/es/trasign/cours/2025 - 2026/polycopié.pdf", "https://drive.google.com/uc?id=1z953_JRpwozY2vwMqQhkSCyXts9bVctL"],
	["/p/s6/es/trasign/cours/2025 - 2026/chapt 1.pdf", "https://drive.google.com/uc?id=1OYWw8K4qxclUTkhhbhrJAAlUfw5lS5Ei"],
	["/p/s6/es/trasign/tds/2025 - 2026/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1ziLri2Hc175F_KmuPIinbFKAu2QistP0"],
	["/p/s6/es/trasign/tds/2025 - 2026/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1_t_fl7quqMtHGDO0P-oeE5nFF1txMvnb"],
	["/p/s6/es/trasign/tds/2025 - 2026/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1Y3O1ezaCHyvjj_H452RNw_KypnsTkJfT"],
	["/p/s6/es/trasign/tds/2025 - 2026/td2 - corrigé (incomplet).pdf", "https://drive.google.com/uc?id=1-vzDOzW8puq3wKwB3B1HtPfprLJl6UvN"],
	["/p/s6/es/trasign/tds/2025 - 2026/td3 - énoncé.pdf", "https://drive.google.com/uc?id=11JeplfBg0TjzYYwlewTbRuIiO_jxLd0d"],
	["/p/s6/es/trasign/tps/2025 - 2026/tp1 - énoncé.pdf", "https://drive.google.com/uc?id=1NsTke2srsVar6Cs9hAOwMFXZ2lfEbUMy"],
	["/p/s6/es/trasign/tps/2025 - 2026/tp1 - corrigé.pdf", "https://drive.google.com/uc?id=13P8yndrBtHpgYTINnz00ywJ1GpcZs_lH"],
	["/p/s6/es/trasign/tps/2025 - 2026/tp2 - énoncé.pdf", "https://drive.google.com/uc?id=1hdKaahnDFhL4ZFONjcRsnfKzXSOfpTks"]

];

let aXu_s6 = [

	["/s6", "https://drive.google.com/drive/folders/1WMOKzQhX-XUCewfXSnNlAQjIcUz4N5Nu?usp=sharing"],

	["/p/s6/lngetr4/tds/lngetr4 - unit 1.pdf", "https://drive.google.com/uc?id=1_jEw7yvXb6xpj80J1TBOKYf86P8Wdn8U"],

	["/p/s6/automat/cours/2023 - 2024/polycopié (partie 1).pdf", "https://drive.google.com/uc?id=17i_nOyS88w7SzyJ9_E14YyHK1T4hFIee"],
	["/p/s6/automat/cours/2023 - 2024/polycopié (partie 1)_compressed.pdf", "https://drive.google.com/uc?id=1B7LQnQRakK62-P_zMoucxh9iEIwNbTgQ"],
	["/p/s6/automat/cours/2023 - 2024/polycopié (partie 2).pdf", "https://drive.google.com/uc?id=1IKy2lMKz2PuHytBNAn8j7d6lTrhwJ27c"],
	["/p/s6/automat/cours/2023 - 2024/polycopié (partie 2)_compressed.pdf", "https://drive.google.com/uc?id=14diacO3dv97pPPXaI5erKEGzZSuvIoCd"],

	["/p/s6/automat/cours/2024 - 2025/séance 01.pdf", "https://drive.google.com/uc?id=1rzt2Y4qWYCJzMLVbLAL_gCV1jNHdm40X"],
	["/p/s6/automat/cours/2024 - 2025/séance 02.pdf", "https://drive.google.com/uc?id=10_t4Ll8V_iHWXIfikAyASba18PT_2-er"],
	["/p/s6/automat/cours/2024 - 2025/séance 03.pdf", "https://drive.google.com/uc?id=1SbbjGUU98xOvxHCYEMrFPPnWFw2YffZg"],
	["/p/s6/automat/cours/2024 - 2025/séance 04.pdf", "https://drive.google.com/uc?id=15tHXHypfmtbcA7qzEcFMXalejS8fWwlC"],
	["/p/s6/automat/cours/2024 - 2025/séance 05.pdf", "https://drive.google.com/uc?id=1IT5qEvfBjukFcHW_qCmEReZ1do4rZFK3"],
	["/p/s6/automat/cours/2024 - 2025/séance 06.pdf", "https://drive.google.com/uc?id=1oGhNKy1jbOPC3aH7CyD7KLTgK9tvimQf"],
	["/p/s6/automat/cours/2024 - 2025/séance 07.pdf", "https://drive.google.com/uc?id=1fZwvkJbK0slIMyE8ftplK-4GrV9lN-4y"],
	["/p/s6/automat/cours/2024 - 2025/séance 08.pdf", "https://drive.google.com/uc?id=1sxTdR8QEjFEdv3y1GcU9DqlZh1Ecn4DT"],
	["/p/s6/automat/cours/2024 - 2025/séance 09.pdf", "https://drive.google.com/uc?id=12Hbss9BTyfTy578Ff55rO7mQqauK5WUD"],
	["/p/s6/automat/cours/2024 - 2025/séance 10.pdf", "https://drive.google.com/uc?id=1J6GenRx-DNgsJdMveLJCW1oWPM13SXBF"],
	["/p/s6/automat/cours/2024 - 2025/séance 11.pdf", "https://drive.google.com/uc?id=14Gz7ArFpOjA9e2I6qfNhykrsq9il9Q7o"],

	["/p/s6/automat/cours/2025 - 2026/séance 01.pdf", "https://drive.google.com/uc?id=1BVizJ1cex3vgQ_Vp_3CuLO-PFiQEFt6V"],
	["/p/s6/automat/cours/2025 - 2026/séance 02.pdf", "https://drive.google.com/uc?id=1wFZ4z-XrzLUTwmVoD66Kk1zIRd6IXe0a"],
	["/p/s6/automat/cours/2025 - 2026/séance 03.pdf", "https://drive.google.com/uc?id=1MUVH7amnccnK1zg_30Y1FEadfkvosePt"],
	["/p/s6/automat/cours/2025 - 2026/séance 04.pdf", "https://drive.google.com/uc?id=1QaM74oxWYumBY531guTvNqHuVVSM6YOQ"],
	["/p/s6/automat/cours/2025 - 2026/séance 05.pdf", "https://drive.google.com/uc?id=1gRrJzQTIbl7KE1v0YSg6pkZX0H0c0ZeK"],
	["/p/s6/automat/cours/2025 - 2026/séance 06.pdf", "https://drive.google.com/uc?id=1zGEAAZACWY-E_3CdzUopEk5Vvig7hwRS"],
	
	["/p/s6/automat/tds/2025 - 2026/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1N_-O4JV1R1QETICryfYTCxK13u5jfBl_"],
	["/p/s6/automat/tds/2025 - 2026/td1 - corrigé (classe).pdf", "https://drive.google.com/uc?id=1Zvvq1EmSeog7z9oGemRYCZ84G_htGpNb"],
	["/p/s6/automat/tds/2025 - 2026/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1Z2TVkVwP0jEoNHEh6OGEm1qi6bEDW4RH"],
	["/p/s6/automat/tds/2025 - 2026/td1 - annexe 1.pdf", "https://drive.google.com/uc?id=1_p2pKtExVhMLRYmatbW5zXEHXtCv-jtq"],
	["/p/s6/automat/tds/2025 - 2026/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1fzmbH_b9u5_B2rFa0S-34eAShp0qhcKc"],
	["/p/s6/automat/tds/2025 - 2026/td2 - rappel.pdf", "https://drive.google.com/uc?id=14nAIK-JTY0ko9MrZDH9-tRnotzqHAo7i"],
	["/p/s6/automat/tds/2025 - 2026/td2 - corrigé (incomplet).pdf", "https://drive.google.com/uc?id=1FzMZsJce1SZ1lZZWOhazVOrclMvsph-s"],
	["/p/s6/automat/tds/2025 - 2026/td3 - énoncé (preparation_tp3).pdf", "https://drive.google.com/uc?id=1W2c_uMjajYIjM94P4d6ujoSlLgV2BJ1F"],
	["/p/s6/automat/tds/2025 - 2026/td3 - corrigé (préparation_tp3).pdf", "https://drive.google.com/uc?id=1EwytOxAfPSXcvwLRAyxbu6dtkw0tuOSC"],

	["/p/s6/automat/tps/tp1 - corrigé.pdf", "https://drive.google.com/uc?id=1WBcUC_pTePHuHzrGmCpfL9U3HCRygE63"],
	["/p/s6/automat/tps/support des tps.pdf", "https://drive.google.com/uc?id=1bBB9NZOSOpd-I3fe3I6AfsTcerBPR_Jy"]
];

let aXu_eer_s5 = [
	
	["/eer5", "https://drive.google.com/drive/folders/1YmBIMwcIkzI3ZVnP_lTg5Iiahhrfszr2?usp=sharing"],

	["/thermap"       , "https://drive.google.com/drive/folders/1k6U4XdHDLZLYUfTJk9pB9NxtETpiuMsm"],
	["/phystat"       , "https://drive.google.com/drive/folders/1Wj_sXZAY-BTTdG8c3ezwE2En1U82cOWf"],
	["/eer-eltelnp"    , "https://drive.google.com/drive/folders/1TpmN2q09H_E9rkol9UJVPl_jJD6fIMLC"],
	["/mecmilc"       , "https://drive.google.com/drive/folders/1bYlDMMtBW-0zTXbMK63CyqSS3tsAcdM8"],
	["/eer-calcsci"    , "https://drive.google.com/drive/folders/1cZJKfhl0hGeLK2WeZVwcC39Z7P_C4q_B"],
	["/s5-eer-lngetr3" , "https://drive.google.com/drive/folders/1LfVmwh2n-QiO0Z0T9t87CMI53PtOawW-"],
	["/eer-option"     , "https://drive.google.com/drive/folders/1qKrd1RWp9TgEgpJcdmIakW_gAWRG7gll"],

	["/p/s5/eer/thermap/cours/chapt 1 à 7.pdf", "https://drive.google.com/uc?id=1z27uYJ5HOdfvAVtbzwt-qqnzTWn767E0"],
	["/p/s5/eer/thermap/cours/chapt 1.pdf", "https://drive.google.com/uc?id=1yvAweAhrZjpktoO3uSiIp4FZCRZZGs-J"],
	["/p/s5/eer/thermap/cours/chapt 2.pdf", "https://drive.google.com/uc?id=1m57t1IBguZULORslbJBlcZgyeqxAd6mI"],
	["/p/s5/eer/thermap/cours/chapt 3 et 4.pdf", "https://drive.google.com/uc?id=1EF-oQ8q176syAdbSUffxFD22Jg_SUrUw"],
	["/p/s5/eer/thermap/cours/chapt 5.pdf", "https://drive.google.com/uc?id=1FrpNTnSyNQJK0Q_Sx_2_MrwPnQQjKgq9"],
	["/p/s5/eer/thermap/cours/chapt 6 et 7.pdf", "https://drive.google.com/uc?id=1DAh1MRf-YPI_O39AqeBsccNn7x4KXc5S"],
	["/p/s5/eer/thermap/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1avlebQLYdFcrar228a6SiZ0_av3FVTem"],
	["/p/s5/eer/thermap/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1SnXJ3uGLOQXtDOpdQaN5yhU04bH6wUjW"],
	["/p/s5/eer/thermap/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1IurOi0kdJSD-jcCfMVNXOw7nX3pB9z0n"],
	["/p/s5/eer/thermap/tds/td2 - corrigé.pdf", "https://drive.google.com/uc?id=1punlRPKJHWZPFxGSQOt5JNiaK5AQqJks"],
	["/p/s5/eer/thermap/tds/td3 - énoncé.pdf", "https://drive.google.com/uc?id=1m5s3TLPiSBDg5ZNWBoxQP9QjWXjwaVvk"],
	["/p/s5/eer/thermap/tds/td3 - corrigé.pdf", "https://drive.google.com/uc?id=1x8dpqdd4XUHSI6yCBI08RttNexuPOZBQ"],
	["/p/s5/eer/thermap/tds/td4 - énoncé.pdf", "https://drive.google.com/uc?id=1wT0pneJRXb3pOTJNwNmQuyvtBhjOqfz8"],
	["/p/s5/eer/thermap/tds/td4 - corrigé.pdf", "https://drive.google.com/uc?id=1Jux8p3E3l2dvRiGR7cfwMh91MjkmNJLg"],
	["/p/s5/eer/thermap/tds/td5 - énoncé.pdf", "https://drive.google.com/uc?id=1dUYKC8qQfWYYPUr4Jfafk6F9ub7meOEk"],
	["/p/s5/eer/thermap/tds/td5 - corrigé.pdf", "https://drive.google.com/uc?id=1NA_-edniK2s8rb1WdpRssmld0lKn6-z2"],
	["/p/s5/eer/thermap/tps/support des tps.pdf", "https://drive.google.com/uc?id=1X7JB5KQoevenm0SBJNWzwSYTMxpGKigE"],

	["/p/s5/eer/phystat/cours/chapt 0.pdf", "https://drive.google.com/uc?id=1yaxutN1UfT40vlNA-Um8EsRvMKDy0TrQ"],
	["/p/s5/eer/phystat/cours/chapt 1.pdf", "https://drive.google.com/uc?id=1I_qgg_g6EIeQMPwtRtT_SkKhgnEC2VLg"],
	["/p/s5/eer/phystat/cours/chapt 2.pdf", "https://drive.google.com/uc?id=15_WuIK1aWdP-ePqmnFgJLhSp-2HNRsy1"],
	["/p/s5/eer/phystat/cours/concept 3.pdf", "https://drive.google.com/uc?id=1Y5Y64XWvc7srYcw6e00ZwrQgOtRU4Rco"],
	["/p/s5/eer/phystat/cours/cours (policopié).pdf", "https://drive.google.com/uc?id=1mjduwZnDguTLFjONMzb8n51pMqzRHNx8"],
	["/p/s5/eer/phystat/cours/résumé.pdf", "https://drive.google.com/uc?id=1qaUM3L9hFIizO4as8zlXS10pPNEKdqg6"],
	["/p/s5/eer/phystat/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=18LK_L-W-Q93pxOEkHc8h-5Fx52b2d0uu"],
	["/p/s5/eer/phystat/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1l88IXkEodytWABv-ZhUM8bsO0bVhWUzZ"],
	["/p/s5/eer/phystat/tds/td2 - énoncé et corrigé.pdf", "https://drive.google.com/uc?id=12WiuAD-0EbDUJSndbb-DsntgOgMU4gDk"],
	["/p/s5/eer/phystat/tds/td3 - énoncé et corrigé.pdf", "https://drive.google.com/uc?id=1Hb9zUk0ZrjVYIK6pZ1XuH7kmP7oPA9C0"],
	["/p/s5/eer/phystat/tds/td3 - corrigé (détails ex 5).pdf", "https://drive.google.com/uc?id=1lEXsIIbfzAPL2ys3DudXUO97jZ12iOis"],
	["/p/s5/eer/phystat/examens/quelques examens corrigés.pdf", "https://drive.google.com/uc?id=1lvLcQRtBVlsRjd6XUX28NWW89ZAF3zlJ"],
	["/p/s5/eer/phystat/examens/manuscript d\'examens.pdf", "https://drive.google.com/uc?id=1CToK5WiXFwALR_xePewdNo-YTVP3NWdf"],

	["/p/s5/eer/mecmilc/cours/chapt 1 à 4.pdf", "https://drive.google.com/uc?id=1RsThFPI9QWX5obYVcungzWYwE5YuHmGG"],
	["/p/s5/eer/mecmilc/cours/chapt 1.pdf", "https://drive.google.com/uc?id=1gb21MHk2B8LU0ShcTXM1M9sAswYYzVJs"],
	["/p/s5/eer/mecmilc/cours/chapt 2.pdf", "https://drive.google.com/uc?id=1N8_KHvwy55MSntvGyOAVLDkcHL6edQae"],
	["/p/s5/eer/mecmilc/cours/chapt 3.pdf", "https://drive.google.com/uc?id=1zYZiBcpSe96N9P51uAhC1PpwXkNZWWHP"],
	["/p/s5/eer/mecmilc/cours/chapt 4.pdf", "https://drive.google.com/uc?id=1o7_0EW7P8u5pZ-_GjTgHmi-mXd2JX9xj"],
	["/p/s5/eer/mecmilc/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1fEtLpZCjCcDSqoc7SJVVA09ija18Q3d9"],
	["/p/s5/eer/mecmilc/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1wuOYn1JQ4sEmfcoeogV4TE4L7eEvagsw"],
	["/p/s5/eer/mecmilc/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1LghdxUCznzvhOGf9uI7GWVDOPO7x4jCq"],
	["/p/s5/eer/mecmilc/tds/td2 - corrigé.pdf", "https://drive.google.com/uc?id=1sQ5qiPeA7CMwToYgGH5wCx6B_yPeIoXR"],
	["/p/s5/eer/mecmilc/tds/td3 - énoncé.pdf", "https://drive.google.com/uc?id=1AbE48uDA1lGtdnokuwPBcYhe3q3ZXyPB"],
	["/p/s5/eer/mecmilc/tds/td3 - corrigé.pdf", "https://drive.google.com/uc?id=1qnxwkksY3wcx-7UTghD-4a7eXFEE-8zH"],
	["/p/s5/eer/mecmilc/tds/td4 - énoncé.pdf", "https://drive.google.com/uc?id=1XqxQ57hnv0CfCSFzRiHyFDivYJFmdGck"],
	["/p/s5/eer/mecmilc/tds/td4 - corrigé.pdf", "https://drive.google.com/uc?id=1p2mmV7AQ_QYaEhsRgDly-qx8EWWvPuwr"],

	["/p/s5/eer/option/cours", "https://drive.google.com/drive/folders/1qKrd1RWp9TgEgpJcdmIakW_gAWRG7gll"],

	["/p/s5/eer/modules", "https://drive.google.com/file/d/1bEpLBdST_XrJ3wIOk1mMk1NG0jgzAves/view?usp=drive_link"]

];

let aXu_es_s5 = [

	["/es5", "https://drive.google.com/drive/folders/1uBF9PtOvTMQEVUdf7nmEcLDtRvseSZ4E?usp=drive_link"],

	["/mecqua2"       , "https://drive.google.com/drive/folders/1JhJHYxGRJnm73hEOIEwmy--ImtIHzOsU"],
	["/elnana2"       , "https://drive.google.com/drive/folders/16rAKS6KjQRSIzKbewB4vTJDkMqPuuniM"],
	["/es-eltelnp"    , "https://drive.google.com/drive/folders/1FDWqF-rPa7Qehnad1IZC6GkkrAmb1oOl"],
	["/elnnum2"       , "https://drive.google.com/drive/folders/1R6yp1Q4ouwj9-sZr5o8bYSOYqoxCfmZF"],
	["/es-calcsci"    , "https://drive.google.com/drive/folders/1RIaiA3HCuDmEHZ4EBV9x6W1fBSQvTkCU"],
	["/s5-es-lngetr3" , "https://drive.google.com/drive/folders/1qqjXE5hw1NDx_xw4xdUhGkJPGNGpqKOB"],
	["/es-option"     , "https://drive.google.com/drive/folders/1evDjl_6qcx1ybJmAsVy0XbeRy3-u7QYD"],

	["/p/s5/es/mecqua2/cours/cours (2020 - 2021).pdf", "https://drive.google.com/uc?id=1_gynDz4bZA1CN8KOd-YYVx4T0IDjIvc1"],
	["/p/s5/es/mecqua2/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1lViRoX8-KDO4cMVT_0J3YMAg7hhWVnWN"],
	["/p/s5/es/mecqua2/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1PEkPvmlbhp-yRBzzcGywOX3Tgl1rKqIm"],
	["/p/s5/es/mecqua2/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1DgHq0R5mI9Hm0XhyncjvxfemFDC_NtGl"],
	["/p/s5/es/mecqua2/tds/td2 - corrigé.pdf", "https://drive.google.com/uc?id=1yp_20GunR5Y4qwLe5jxty2iQkMhfm24_"],
	["/p/s5/es/mecqua2/tds/td3 - énoncé.pdf", "https://drive.google.com/uc?id=15ttkAcNoXk-rMYEPnLweqrYGUNkjc1Lo"],
	["/p/s5/es/mecqua2/tds/td4 - énoncé.pdf", "https://drive.google.com/uc?id=1PL5kZSXYEOUfpmttHkUHqKy_OKN4y9Ku"],
	["/p/s5/es/mecqua2/examens/recueil d\'examens corrigés (2016 - 2019).pdf", "https://drive.google.com/uc?id=1s94NjQ8FJpbkExAXczUWRigs8fmUZdLs"],
	["/p/s5/es/mecqua2/examens/17 examens corrigés (2016 - 2024).pdf", "https://drive.google.com/uc?id=1qB2qEqigKfJ9_q9Hyxp3LULCBayPY3xJ"],

	["/p/s5/es/elnana2/cours/support du cours - module eq.pdf", "https://drive.google.com/uc?id=123H8siCjSQ140pE0TDr9YqYt6xNWeVo1"],
	["/p/s5/es/elnana2/cours/rappel - montage à aop.pdf", "https://drive.google.com/uc?id=1SUZvGiHy_KRSij44ePb_pJSEz6WfH5cx"],
	["/p/s5/es/elnana2/cours/chapt 1 - synthese filtres actifs.pdf", "https://drive.google.com/uc?id=1SpY7NuEhgyDGDyP2sdTSilQuFnqIJHkU"],
	["/p/s5/es/elnana2/cours/chapt 1 - synthèse filtre passe-bas - 4 méthodes.pdf", "https://drive.google.com/uc?id=1PEhgSjIc6PQkRCeqwLRtw5RtO7Bz3bGr"],
	["/p/s5/es/elnana2/cours/chapt 3 - les oscillateurs sinusoïdaux.pdf", "https://drive.google.com/uc?id=1g7TpYOoxCPgR1PoNb9rEa_ptkpCBDkVT"],
	["/p/s5/es/elnana2/cours/chapt 4.pdf", "https://drive.google.com/uc?id=1nMGn-vfgqprEnOuxj0pDtXQSytjDxc_P"],
	["/p/s5/es/elnana2/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1_yTzrVmrb7uK8Y1FvPC8r-lhhDMhxUlb"],
	["/p/s5/es/elnana2/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1CPmQGlV-VXhDmC_3zdUtGUKlcYO4hhqx"],
	["/p/s5/es/elnana2/tds/td1 - corrigé (ex 4).pdf", "https://drive.google.com/uc?id=14_4Vbsr1GvqYSDbppLBUA31HuZ0fpY_k"],
	["/p/s5/es/elnana2/tds/td1 exercice supplémentaire des filtres actifs", "https://drive.google.com/drive/folders/1EbGlIPWTnV_gsbtqVrpkIjlXsWSo9Cwt?usp=sharing"],
	["/p/s5/es/elnana2/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1muqCyuOlMFhCgZQggTTLNfXGKDq6kz4K"],
	["/p/s5/es/elnana2/tds/td2 - corrigé.pdf", "https://drive.google.com/uc?id=1BRndKXvePU381lxxIL1cP3qR1UMAzHgb"],
	["/p/s5/es/elnana2/tds/td3 - énoncé.pdf", "https://drive.google.com/uc?id=1dapFj4mI66GxjXKikEdV4bviZesqVlpL"],
	["/p/s5/es/elnana2/tds/td3 - corrigé.pdf", "https://drive.google.com/uc?id=1EXEcM3d2vLpub5hHvwQACro6Y_noAbAq"],
	["/p/s5/es/elnana2/tps/support des tps.pdf", "https://drive.google.com/uc?id1_fmKSqADQVw3_C-6PIf9oJO_e2Qy_vi2="],
	["/p/s5/es/elnana2/tps/tp1 - compte rendu.pdf", "https://drive.google.com/uc?id=1D5YM2Ld78WnCfLrRHETnbLu3OwtGnjt5"],
	["/p/s5/es/elnana2/tps/tp1 - corrigé.pdf", "https://drive.google.com/uc?id=1JMJu3gY2FozlwyJTeY68Y81j-U4wFdBA"],
	["/p/s5/es/elnana2/tps/tp2 - compte rendu.pdf", "https://drive.google.com/uc?id=1gf1P_kCkIBxbVAOpEHJdir__QATddpdT"],
	["/p/s5/es/elnana2/tps/tp2 - corrigé.pdf", "https://drive.google.com/uc?id=11Kz9nHvvX00gkG7KTKK4XCcCabCLgOhg"],
	["/p/s5/es/elnana2/tps/tp3 - compte rendu.pdf", "https://drive.google.com/uc?id=19MzCLpsmYvtw5moB38Rk3UV_vuXuag6N"],
	["/p/s5/es/elnana2/tps/tp4 - corrigé.pdf", "https://drive.google.com/uc?id=1RG-QAv2EEJVC7uIEQW26dqsGlg-KU0ek"],
	["/p/s5/es/elnana2/examens/quelques examens corrigés.pdf", "https://drive.google.com/uc?id=1BFt8xExygnkhXRNl510OfCNfZM-BYj29"],
	["/p/s5/es/elnana2/examens/fascicule d\'examens corrigés.pdf", "https://drive.google.com/uc?id=1WSpUHqoD1U6N_j7_xg7u2eQ64GpEYQYx"],
	["/p/s5/es/elnana2/examens/devoir - oscillateurs sinus (2020 - 2021).pdf", "https://drive.google.com/uc?id=1-NJsR9Ss87NZkAGZRskvnoNod3DYjkA6"],

	["/p/s5/es/elnnum2/cours/chapt 1 à 4.pdf", "https://drive.google.com/uc?id=1ltAbcmc2YbrRbxhiEbuaZhGsR0znL-Pp"],
	["/p/s5/es/elnnum2/cours/chapt 1.pdf", "https://drive.google.com/uc?id=1oFyqtglXce_OPwIxaTf1ANptoFPvpLyp"],
	["/p/s5/es/elnnum2/cours/chapt 2.pdf", "https://drive.google.com/uc?id=1mk4ry1aqz3nbT0kvV5mVozm6mWwrluCT"],
	["/p/s5/es/elnnum2/cours/chapt 3.pdf", "https://drive.google.com/uc?id=1KcPQAEq55u-ngbHNEuQztx_DHZNqMzP1"],
	["/p/s5/es/elnnum2/cours/chapt 4.pdf", "https://drive.google.com/uc?id=1M7kXZRXNKC7jHKSt1ooTos5ywTz8fOUG"],
	["/p/s5/es/elnnum2/cours/schéma des plds - chapt 3.pdf", "https://drive.google.com/uc?id=1lwFqRqAzPxFJAFaD3Rvhfgyazx7GB--m"],
	["/p/s5/es/elnnum2/cours/vhdl cheat sheet 1.pdf", "https://drive.google.com/uc?id=1y68GMuc49z96csf-I0270_KcVRJujzfa"],
	["/p/s5/es/elnnum2/cours/vhdl cheat sheet 2.pdf", "https://drive.google.com/uc?id=1n6d5TbTvLJBRGEC4uFvZDsRRSoC6kLZ0"],
	["/p/s5/es/elnnum2/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1-qjhfYcbh-dvEzzqimVxMhetRNWkytlF"],
	["/p/s5/es/elnnum2/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1bENbfPg7Sdr01PNoCSgfvYfQIxuNhB5I"],
	["/p/s5/es/elnnum2/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1smGVcQPaZVpOKygUZNhu7Id0hL-wAE6h"],
	["/p/s5/es/elnnum2/tds/td2 - corrigé.pdf", "https://drive.google.com/uc?id=1zeLtqQOdPfCi2FEQVPAbh-0gjSiXBs_D"],
	["/p/s5/es/elnnum2/tds/td3 - énoncé.pdf", "https://drive.google.com/uc?id=1GFVPk_mYSgE84vQGKaYByoJ--bCgt6ir"],
	["/p/s5/es/elnnum2/tds/td3 - corrigé.pdf", "https://drive.google.com/uc?id=1UK0MeMFOt51qd9TuBAtXg93IqWc71tyo"],
	["/p/s5/es/elnnum2/tds/td4 - énoncé.pdf", "https://drive.google.com/uc?id=1XygNTX8ax42bIvoUWT6iYMXjPIUc2RvT"],
	["/p/s5/es/elnnum2/tds/td4 - corrigé.pdf", "https://drive.google.com/uc?id=1jaHJjszNo94qvEL3QQ4Cn3s8J4iry20N"],
	["/p/s5/es/elnnum2/tps/support des tps.pdf", "https://drive.google.com/uc?id=1mGT3zreOVYUPh7plYdFEWs5JNS_9o2Mg"],
	["/p/s5/es/elnnum2/tps/tp1 - compte rendu.pdf", "https://drive.google.com/uc?id=1Gs2rNdR-zN38ks1OVQdd8eLjZLH5ppmU"],
	["/p/s5/es/elnnum2/tps/tp1 - corrigé.pdf", "https://drive.google.com/uc?id=1GfRXbw0O-Nm8J09mgUmi9P-6AAGmb2tr"],
	["/p/s5/es/elnnum2/tps/tp1 - corrigé - digi board 2.pdf", "https://drive.google.com/uc?id=141M9gdTHQdkgGYh-BQGM70Km6KNMTd1U"],
	["/p/s5/es/elnnum2/tps/tp2 - corrigé.pdf", "https://drive.google.com/uc?id=1KLsTCnluN0zeLD5erXhGeaTTGIjA-mAH"],
	["/p/s5/es/elnnum2/tps/tp3 - corrigé.pdf", "https://drive.google.com/uc?id=1oPuSlgoFXps1bq5Z2jhINNBQXr2x4KQd"],
	["/s4/elnnum1", "https://drive.google.com/drive/folders/1pvQjMi-bj9SHqHSS3n8im7DhmNyZEX8t"],

	["/p/s5/es/modules", "https://drive.google.com/file/d/1Wv54V9hVJWWTPwyNi1Bv2svs-opf8Pk7/view?usp=sharing"]

];

let aXu_s5 = [

	["/s5", "https://drive.google.com/drive/folders/1E2VtrpipZxFWu3KTIKJeuajYN5S8bGmD?usp=sharing"],
	
	["/p/s5/calcsci/cours/chapt 1.pdf", "https://drive.google.com/uc?id=14r5Ctaf9i2YCpCDwDdt828opnOpe5uUG"],
	["/p/s5/calcsci/cours/chapt 2.pdf", "https://drive.google.com/uc?id=1EYy5ngtnWz2vWfmhP-FNX3FpVwpib2mV"],
	["/p/s5/calcsci/cours/chapt 3.pdf", "https://drive.google.com/uc?id=1fYB5pJ6DdR-ldt58K41qYT_vUJ4qTEpY"],
	["/p/s5/calcsci/cours/chapt 4.pdf", "https://drive.google.com/uc?id=1DcpPf_sTr5C6Q7SP4BSg20yEJZd5QwJx"],
	["/p/s5/calcsci/cours/cours (polycopié).pdf", "https://drive.google.com/uc?id=1TqiZwMEueEQOe9wwwQDnEOGn9AZ_kMJ1"],
	["/p/s5/calcsci/cours/résumés", "https://drive.google.com/drive/folders/1EIK4LiS6aZABC5Xf6qLZUOUf8QHNNPhZ?usp=drive_link"],
	["/p/s5/calcsci/cours/fichiers python", "https://drive.google.com/drive/folders/16Bn2rDo1didSDYMF-fPq6Q9q5FQ_tCar"],
	["/p/s5/calcsci/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1hExhLnZNsx7Y7ZRjiy68B5ck3q930a0F"],
	["/p/s5/calcsci/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1zDjU5DjjWfugOXt4r38kmgdQkygi7Zj2"],
	["/p/s5/calcsci/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1AEAy0rgukgCHy2dTs4GOwvRUrJe-Q9E_"],
	["/p/s5/calcsci/tds/td2 - corrigé.pdf", "https://drive.google.com/uc?id=1Fqx4gv1MZ-9xHVcxhaDv22R63--0yIDQ"],
	["/p/s5/calcsci/tds/td3 - énoncé.pdf", "https://drive.google.com/uc?id=1pxnPRKcVyjn5Nmw13ysvHB0fbxp_Aaja"],
	["/p/s5/calcsci/tds/td3 - corrigé.pdf", "https://drive.google.com/uc?id=1MHWOiYTh5eADonJKreOSSFVVHXUhOUSk"],
	["/p/s5/calcsci/tps/révisions des tps.pdf", "https://drive.google.com/uc?id=1QUUXQ9sE1Lr-MXn3aueH6_-N0nCH6YOM"],
	["/p/s5/calcsci/tps/tp 1", "https://drive.google.com/drive/folders/1qsdfqJ60G0A2Xz_-LIjucV5Dxw7Z4nd3?usp=drive_link"],
	["/p/s5/calcsci/tps/tp 2", "https://drive.google.com/drive/folders/10X96JfmqiXVkD5rz1YbLrjGpNItsfrSS?usp=drive_link"],
	["/p/s5/calcsci/tps/tp 3", "https://drive.google.com/drive/folders/1_R-yVJZKyJD9qiGpcN6lZGmgj34fVtxO?usp=drive_link"],
	["/p/s5/calcsci/tps/dossier des tps", "https://drive.google.com/drive/folders/1ajM_1ix9cfr1aANyJckjEmWwyf1eVT7p?usp=drive_link"],

	["/p/s5/lngetr3/tds/lngetr3 - unit 1 to 6.pdf", "https://drive.google.com/uc?id=1K19ft5BwCHbKxMjRKR_z9QyJFVRfln20"],
	["/p/s5/lngetr3/tds/lngetr3 - week 1.pdf", "https://drive.google.com/uc?id=1bC2UcPgLja9oiiflRj7OW54ypMBsWiuA"],
	["/p/s5/lngetr3/tds/lngetr3 - week 2.pdf", "https://drive.google.com/uc?id=1j1yaTsLlUL9rP3X-HrJQdNPkv4UjOmlz"],
	["/p/s5/lngetr3/tds/lngetr3 - week 3.pdf", "https://drive.google.com/uc?id=1oKB2wzacZuW1bQ4K3yOwdBrB9F4NcibE"],
	["/p/s5/lngetr3/tds/lngetr3 - week 4.pdf", "https://drive.google.com/uc?id=1s19VfqR8ItseXSPGgYZBmUfL8trFHYYp"],
	["/p/s5/lngetr3/tds/lngetr3 - week 5.pdf", "https://drive.google.com/uc?id=1r_Q1gR_PmkAkmfTirMYyQprJY16VvXa4"],

	["/p/s5/eltelnp/cours/chapt 1 à 6.pdf", "https://drive.google.com/uc?id=1mU-FyUgeNXn3jufFINpXAD_ltDmhZpGA"],
	["/p/s5/eltelnp/cours/chapt 1.pdf", "https://drive.google.com/uc?id=1NczkNEUjkHPXuQeBeaiaROB6bXcTIbEl"],
	["/p/s5/eltelnp/cours/chapt 2.pdf", "https://drive.google.com/uc?id=199t2g_IA535gFUyokstDi121p6tghohA"],
	["/p/s5/eltelnp/cours/chapt 3.pdf", "https://drive.google.com/uc?id=1Ueu0SS5abp8Ufv2wTkiZSQukT0Rs674X"],
	["/p/s5/eltelnp/cours/chapt 4.pdf", "https://drive.google.com/uc?id=1GZP4qi2mnSQq2iW1vv-Ny068ySKLDOuI"],
	["/p/s5/eltelnp/cours/chapt 5.pdf", "https://drive.google.com/uc?id=1a-fW61UzUXaz2Uxg2QG3uED9sCXEvgNt"],
	["/p/s5/eltelnp/cours/chapt 6.pdf", "https://drive.google.com/uc?id=1TNTE6ghR2clWgy9u737h0ScG6KXGb0cC"],
	["/p/s5/eltelnp/cours/résumé circelc.pdf", "https://drive.google.com/uc?id=18svzA8okrRHXWMfmq9c_qoUWaOFQKutG"],
	["/p/s5/eltelnp/cours/chapitre1_résumé.pdf", "https://drive.google.com/uc?id=1UOvlfNwaiuV8kUcyoHJW-NVv0yrYUp7j"],
	["/p/s5/eltelnp/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1uqSDhRzwEX0HhIlcBccOTDDprhN5a46e"],
	["/p/s5/eltelnp/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1sa6nWcwlNRvwhH6H64Axr-Qx4yHuZLuN"],
	["/p/s5/eltelnp/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1l_8JrsOov_b5Agry9ibo-i-LJLjXJIZb"],
	["/p/s5/eltelnp/tds/td2 - corrigé.pdf", "https://drive.google.com/uc?id=1N36YlF14nTPQZRzjpkwXv2fFcIk7ZY8U"],
	["/p/s5/eltelnp/tds/td3 - énoncé.pdf", "https://drive.google.com/uc?id=1_uV9g5XLijCwhFLjYkN3svyrBGej6HSU"],
	["/p/s5/eltelnp/tds/td3 - corrigé.pdf", "https://drive.google.com/uc?id=1bd3o5cls71hLvVqG5Ek97SNTKLeCNWyp"],
	["/p/s5/eltelnp/tds/td5 - énoncé.pdf", "https://drive.google.com/uc?id=1l-ze5SBvNO0u8_Mi7MFcNhGc4TnQ3GO6"],
	["/p/s5/eltelnp/tps/support des tps.pdf", "https://drive.google.com/uc?id=1H0Mqlr4Dq6I3KuWYUQPzEvofCqsci49s"],
	["/p/s5/eltelnp/tps/tp1 - compte rendu.pdf", "https://drive.google.com/uc?id=1H8EYVlKXB13SvVkrTSRvk3ceRHh9nHOv"],
	["/p/s5/eltelnp/tps/tp1 - corrigé.pdf", "https://drive.google.com/uc?id=1dPG4B1OjOE4fvEUI2cI67PGjbRJGhKwh"],
	["/p/s5/eltelnp/tps/tp2 - compte rendu.pdf", "https://drive.google.com/uc?id=1PgvdFn8Jqv3B2jPJavT5SWJoKj2Me-MS"],
	["/p/s5/eltelnp/tps/tp2 - corrigé.pdf", "https://drive.google.com/uc?id=1rAJ7i5edDqVWVKGYQgn1815VC7lxcwMf"],

	["/p/s5/option/cours/algorithmique - leçons 1 à 5.pdf", "https://drive.google.com/uc?id=1LrnFiwU4VKquzFnLKG2gZvQbKkQ6iybI"],
	["/p/s5/option/cours/python - chapitres 1 à 5.pdf", "https://drive.google.com/uc?id=1UQRDBRTq5dafa3tDyS_i3FR-G0UAMiHv"],
	["/p/s5/option/cours/option - exemples corrigés (tous chapitres inclus).pdf", "https://drive.google.com/uc?id=1wWBlYTpbjzV5u-NnxcPvvXqWfpecrNZ3"],

	["/pc_p5_newcolors", "https://drive.google.com/file/d/1RjU1AfyoxrMiyMbYTk3WUvvH0Du3kZSj/view?usp=sharing"]

];

let aXu_s4 = [


	["/s4", "https://drive.google.com/drive/folders/1AbkccDkshVpDaYBdR1cLlX3D4BYHFyfj?usp=sharing"],

	["/elnana1", "https://drive.google.com/drive/folders/1hFe6jMiLS6VAsINUtiACRD79nHSBC08D?usp=sharing"],
	["/optiq2", "https://drive.google.com/drive/folders/1i5py3itZ-R50zHH5dG6Q0t0X__XSWemH?usp=sharing"],
	["/mecqua1", "https://drive.google.com/drive/folders/1Qnt8Io4jwvuddZEm9Gnc_nMDIUK74kmj?usp=sharing"],
	["/ananum", "https://drive.google.com/drive/folders/1MuAC8Oh55GGBI4vgaOshI0yWT5gvtuUn?usp=sharing"],
	["/elnnum1", "https://drive.google.com/drive/folders/1pvQjMi-bj9SHqHSS3n8im7DhmNyZEX8t?usp=sharing"],
	["/cristalg", "https://drive.google.com/drive/folders/1BQM-niR4gPPZi3TXc0lYF-RuWl28n4kw?usp=sharing"],
	["/s4-lngetr4", "https://drive.google.com/drive/folders/1Y0vKwT-SLUwpP52GBm4xP3bg73cTmNH6?usp=sharing"],
	["/devpers", "https://drive.google.com/drive/folders/12npFc-VQJS3gqAvnAzHQdk7OGC6RZmM_?usp=sharing"],


	["/p/s4/ananum/cours/chapt 1.pdf", "https://drive.google.com/uc?id=1hca3aJTD4PRf-nl98c8NiwxaY_G3chhP"],
	["/p/s4/ananum/cours/chapt 2.pdf", "https://drive.google.com/uc?id=1ZNOtPZjkaiFYNqVrbUvra-ZxWdTp7svr"],
	["/p/s4/ananum/cours/chapt 3.pdf", "https://drive.google.com/uc?id=1bNA4GcHH1y3Gr4td4ZykhXPZchLXLC0P"],
	["/p/s4/ananum/cours/chapt 4.pdf", "https://drive.google.com/uc?id=1qonmOKS41UHzA4F5RJzxZtfX5YRJUuEn"],
	["/p/s4/ananum/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1riBtnmjIURwMpFbID_sBGlGAdDmt1prD"],
	["/p/s4/ananum/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=10XSFCZ7WzRnfkk2RO1Y-dFz72xFYQuhC"],
	["/p/s4/ananum/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1Yb2GeesuKMsenRj8PtbKlxYRwPb6Hu3b"],
	["/p/s4/ananum/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1hNeIOHECiu2bO8l290alcqMs9EMBJO7o"],
	["/p/s4/ananum/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1koslDKCbKuUyGIIIpvoQcZPVEj21-ntw"],
	["/p/s4/ananum/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1EW-h-X_Rv5Z5DIMX0_ixM3k44n6Iou2W"],
	["/p/s4/ananum/examens/(2022 - 2023) sn corrigé.pdf", "https://drive.google.com/uc?id=1wKqSj3Q8w_1b6LCTsjbhvF7Oosnwq4t3"],
	["/p/s4/ananum/examens/(2023 - 2024) sn corrigé.pdf", "https://drive.google.com/uc?id=1VgfR6Z2eTw4a5XVmBnAFS3w1prL-hnLX"],
	["/p/s4/ananum/examens/(2023 - 2024) sr corrigé.pdf", "https://drive.google.com/uc?id=1Ts8r5BA5WG7Cv7nMol7_ypGoMPG_aRbJ"],
	["/p/s4/ananum/examens/(2024 - 2025) sn - énoncé.pdf", "https://drive.google.com/uc?id=1yrKqIY28RCnk6r7V8SKWDdf7NxQIpkfW"],

];

let aXu_s3 = [

	["/algprg", "https://drive.google.com/drive/folders/1qun8Yp-D7Pb9P4O-cvak20wifhnD5t9U?usp=sharing"],


	["/s3", "https://drive.google.com/drive/folders/1qun8Yp-D7Pb9P4O-cvak20wifhnD5t9U?usp=sharing"],
	
	["/p/s3/circelc/cours/chapt 1 à 4.pdf", "https://drive.google.com/uc?id="],
	["/p/s3/circelc/cours/chapt 1.pdf", "https://drive.google.com/uc?id=1rGApLd16VnxlNX-VbhZAqEaNie2z0Oh9"],
	["/p/s3/circelc/cours/chapt 2.pdf", "https://drive.google.com/uc?id=1oiIjyxXzJkCU9LdYF3TNtK8LE2fXmaPh"],
	["/p/s3/circelc/cours/chapt 3.pdf", "https://drive.google.com/uc?id=1ntv0MSrK40or-zVAW_d881q5ZxwXll1x"],
	["/p/s3/circelc/cours/chapt 4.pdf", "https://drive.google.com/uc?id=1DGpbRfgjOz1P1ckSTwNSNV50Qw5LIjL0"],
	["/p/s3/circelc/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=17e-U7s82UC_eIinhqyPVER95zTo7eKfb"],
	["/p/s3/circelc/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1Vx9cUSnXezBAEO9SchSah_tD8rdhLOXS"],
	["/p/s3/circelc/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1PBLW8t0Gz1qRndwRmmtutmyuoNuGnaJE"],
	["/p/s3/circelc/tds/td2 - corrigé.pdf", "https://drive.google.com/uc?id=17KWlNA_WYkfiyOL9Jor7iHZCf_Cvb72N"],

	["/p/s3/circelc/tps/support des tps.pdf", "https://drive.google.com/uc?id="],
	["/p/s3/circelc/tps/tp1 - compte rendu.pdf", "https://drive.google.com/uc?id="],
	["/p/s3/circelc/tps/tp1 - corrigé.pdf", "https://drive.google.com/uc?id="],
	["/p/s3/circelc/tps/tp2 - compte rendu.pdf", "https://drive.google.com/uc?id="],
	["/p/s3/circelc/tps/tp2 - corrigé.pdf", "https://drive.google.com/uc?id="],

	["/p/s3/algprg/cours/chapt 1 (partie 1).pdf", "https://drive.google.com/uc?id=1MC_EUiOGUj9AH5gm1IProAJkGRvk_Ddu"],
	["/p/s3/algprg/cours/chapt 1 (partie 2).pdf", "https://drive.google.com/uc?id=1QHF9IBc-fiLaZUHPD85J6OytAsBsIeSS"],
	["/p/s3/algprg/cours/chapt 2.pdf", "https://drive.google.com/uc?id=1vRpVBlh5z0Y4YfoNRnVpAyjIYCQwcWHr"],
	["/p/s3/algprg/cours/chapt 3 (partie 1).pdf", "https://drive.google.com/uc?id=1RzNdiMmOANAHWblm1SLraBPzzjZSfVPH"],
	["/p/s3/algprg/cours/chapt 3 (partie 2).pdf", "https://drive.google.com/uc?id=1fgPqsOPL2svITgcNLmT3D0d9K-XVjk-Q"],
	["/p/s3/algprg/cours/chapt 4.pdf", "https://drive.google.com/uc?id=1cGeVBvY6JNRARUUaQ7wOERz4rR9j7Se9"],
	["/p/s3/algprg/cours/chapt 5.pdf", "https://drive.google.com/uc?id=1mAMxwr4ibb1kYk-SnNX9ApoGNFYLxks-"],
	["/p/s3/algprg/cours/chapt 6.pdf", "https://drive.google.com/uc?id=10ZefoKhcIrHQMeRmEHzKgaKAxyhVugaO"],
	["/p/s3/algprg/tds/tds 1 à 4 corrigés.pdf", "https://drive.google.com/uc?id=1CLPCV-wDLyQj3SjkeCEVpXJyrOhUWCnU"],
	["/p/s3/algprg/examens/sn (2024 - 2025) - énoncé.pdf", "https://drive.google.com/uc?id=1F-xke425uz8c0s3Cc6YSwPw95toVObvZ"],
	["/p/s3/algprg/examens/(sn - sr - 2019 - 2020) examens corrigés (python).pdf", "https://drive.google.com/uc?id=1g1BBmNFBovNQ6Pzu8hpmOgmL1KfOAXH8"],
	["/p/s3/algprg/examens/examen blanc corrigé (nouvelle correction).pdf", "https://drive.google.com/uc?id=1rgIWRNv0LmcHMPl1ybBJI_R4bNGe9xQz"],

	["/pc_p5_newcolors", "https://drive.google.com/file/d/1RjU1AfyoxrMiyMbYTk3WUvvH0Du3kZSj/view?usp=sharing"]
];

addressesXurls = aXu_others.concat(aXu_s3, aXu_s4, aXu_s5, aXu_es_s5, aXu_eer_s5, aXu_s6, aXu_es_s6, aXu_eer_s6);

function getURL(x) {
  var e = 0;
  var _url="";
	addressesXurls = aXu_others.concat(aXu_s3, aXu_s4, aXu_s5, aXu_es_s5, aXu_eer_s5, aXu_s6, aXu_es_s6, aXu_eer_s6);

  addressesXurls.forEach((elem, index) => {
    if(decodeURI(x) == decodeURI(elem[0]) || decodeURI(x) == decodeURI(elem[0])+"/")
    {
      _url = elem[1];
      e+=1;
    }
    if(index==addressesXurls.length-1 &&e==0)
    {
      _url = "https://tcfsa.github.io";
    }
  });
  return _url;
}

function red(x) {
  direct_red(getURL(x.replace("https://tcfsa.github.io", "").toLowerCase()));
}

function direct_red(x) {
  window.location.href = x;
}

function newtab_red(x) {
  window.open(x, '_blank').focus();
}

function downf(u){
    var y=u.replace("https://tcfsa.github.io", "").toLowerCase();
    red(y);
}

function viewf(u){
    d_url = getURL(u.replace("https://tcfsa.github.io", "").toLowerCase());
    newtab_red(d_url.replace("https://drive.google.com/uc?id=", "https://drive.google.com/file/d/")+"/view?usp=sharing");
}
