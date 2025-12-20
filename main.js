let addressesXurls = [
["/es", "https://drive.google.com/drive/folders/1uBF9PtOvTMQEVUdf7nmEcLDtRvseSZ4E?usp=drive_link"],
["/eer", "https://drive.google.com/drive/folders/1YmBIMwcIkzI3ZVnP_lTg5Iiahhrfszr2?usp=sharing"],
["/s5", "https://drive.google.com/drive/folders/1E2VtrpipZxFWu3KTIKJeuajYN5S8bGmD?usp=sharing"],
["/d-s3", "https://drive.google.com/drive/folders/1NjOFOxB3h9IiCcmfrufZS9QlFTz9Okjw?usp=drive_link"],
["/d-p", "https://drive.google.com/drive/folders/100sHKEs5lAdWoDZjxesw7GwibhQY5r7M?usp=sharing"],


["/mecqua2"       , "https://drive.google.com/drive/folders/1JhJHYxGRJnm73hEOIEwmy--ImtIHzOsU"],
["/elnana2"       , "https://drive.google.com/drive/folders/16rAKS6KjQRSIzKbewB4vTJDkMqPuuniM"],
["/es-eltelnp"    , "https://drive.google.com/drive/folders/1FDWqF-rPa7Qehnad1IZC6GkkrAmb1oOl"],
["/elnnum2"       , "https://drive.google.com/drive/folders/1R6yp1Q4ouwj9-sZr5o8bYSOYqoxCfmZF"],
["/es-calcsci"    , "https://drive.google.com/drive/folders/1RIaiA3HCuDmEHZ4EBV9x6W1fBSQvTkCU"],
["/s5-es-lngetr3" , "https://drive.google.com/drive/folders/1qqjXE5hw1NDx_xw4xdUhGkJPGNGpqKOB"],
["/es-option"     , "https://drive.google.com/drive/folders/1evDjl_6qcx1ybJmAsVy0XbeRy3-u7QYD"],

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

["/p/s5/eer/option/cours", "https://drive.google.com/drive/folders/1qKrd1RWp9TgEgpJcdmIakW_gAWRG7gll"],

["/p/s5/eer/modules", "https://drive.google.com/file/d/1bEpLBdST_XrJ3wIOk1mMk1NG0jgzAves/view?usp=drive_link"],

["/pc_p5_newcolors", "https://drive.google.com/file/d/1RjU1AfyoxrMiyMbYTk3WUvvH0Du3kZSj/view?usp=sharing"],

["/p/s5/es/mecqua2/cours/cours (2020 - 2021).pdf", "https://drive.google.com/uc?id=1_gynDz4bZA1CN8KOd-YYVx4T0IDjIvc1"],
["/p/s5/es/mecqua2/tds/td1 - énoncé.pdf", "https://drive.google.com/uc?id=1lViRoX8-KDO4cMVT_0J3YMAg7hhWVnWN"],
["/p/s5/es/mecqua2/tds/td1 - corrigé.pdf", "https://drive.google.com/uc?id=1PEkPvmlbhp-yRBzzcGywOX3Tgl1rKqIm"],
["/p/s5/es/mecqua2/tds/td2 - énoncé.pdf", "https://drive.google.com/uc?id=1DgHq0R5mI9Hm0XhyncjvxfemFDC_NtGl"],
["/p/s5/es/mecqua2/tds/td2 - corrigé.pdf", "https://drive.google.com/uc?id=1yp_20GunR5Y4qwLe5jxty2iQkMhfm24_"],
["/p/s5/es/mecqua2/tds/td3 - énoncé.pdf", "https://drive.google.com/uc?id=15ttkAcNoXk-rMYEPnLweqrYGUNkjc1Lo"],
["/p/s5/es/mecqua2/tds/td4 - énoncé.pdf", "https://drive.google.com/uc?id=1PL5kZSXYEOUfpmttHkUHqKy_OKN4y9Ku"],
["/p/s5/es/mecqua2/examens/recueil d\'examens corrigés.pdf", "https://drive.google.com/uc?id=1s94NjQ8FJpbkExAXczUWRigs8fmUZdLs"],
["/p/s5/es/mecqua2/examens/examen - corrigé sn (20-21).pdf", "https://drive.google.com/uc?id=1MTvOASNJUkgRLjpJc4zlGRqD4pM_6Jhc"],
["/p/s5/es/mecqua2/examens/examen - corrigé sr (20-21).pdf", "https://drive.google.com/uc?id=1OkpMdXUKMRqjWUmPuRz_HBnganC2WYP3"],

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

["/p/s5/option/cours/algorithmique - leçons 1 à 5.pdf", "https://drive.google.com/uc?id=1LrnFiwU4VKquzFnLKG2gZvQbKkQ6iybI"],
["/p/s5/option/cours/python - chapitres 1 à 5.pdf", "https://drive.google.com/uc?id=1UQRDBRTq5dafa3tDyS_i3FR-G0UAMiHv"],
["/p/s5/option/cours/option - exemples corrigés (tous chapitres inclus).pdf", "https://drive.google.com/uc?id=1wWBlYTpbjzV5u-NnxcPvvXqWfpecrNZ3"],

["/p/s5/es/modules", "https://drive.google.com/file/d/1Wv54V9hVJWWTPwyNi1Bv2svs-opf8Pk7/view?usp=sharing"],

["/s4", "https://drive.google.com/drive/folders/1AbkccDkshVpDaYBdR1cLlX3D4BYHFyfj?usp=sharing"],
["/a1", "https://drive.google.com/drive/folders/1FmS3pFvWcfHvP_aLFMY6Icfe6nV-5_qg"],
["/a2", "https://drive.google.com/drive/folders/1wnJgrB-ADvwvKkuyk8baLPrEvAbZJCQI"],
["/a3", "https://drive.google.com/drive/folders/1nlET-ECxWim0cSlkscXt1Kuvwz1BtjPf"],
["/a4", "https://mega.nz/folder/K4500IjB#4OrXSVRCXG2ddZlwVT25FQ"]
];

function getURL(x) {
  var e = 0;
  var _url="";
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
