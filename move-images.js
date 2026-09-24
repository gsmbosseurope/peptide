const fs = require('fs');
const path = require('path');
const SOURCE_DIR = path.join(__dirname, '0', 'webp');
const DEST_DIR   = path.join(__dirname, 'assets', 'products');
const FILE_MAP = {
  'BPC-157 2 mg':'bpc-157/bpc-157-2-mg.webp','BPC-157 5 mg':'bpc-157/bpc-157-5-mg.webp','BPC-157 10 mg':'bpc-157/bpc-157-10-mg.webp',
  'TB-500 2 mg':'tb-500/tb-500-2-mg.webp','TB-500 5 mg':'tb-500/tb-500-5-mg.webp','TB-500 10 mg':'tb-500/tb-500-10-mg.webp','TB-500 20 mg':'tb-500/tb-500-20-mg.webp',
  'GHK-Cu 50 mg':'ghk-cu/ghk-cu-50-mg.webp','GHK-Cu 100 mg':'ghk-cu/ghk-cu-100-mg.webp',
  'Glutathione 600 mg':'glutathione/glutathione-600-mg.webp','Glutathione 1500 mg':'glutathione/glutathione-1500-mg.webp',
  'Semaglutide 5 mg':'semaglutide/semaglutide-ozempic-5-mg.webp','Semaglutide 10 mg':'semaglutide/semaglutide-ozempic-10-mg.webp','Semaglutide 20 mg':'semaglutide/semaglutide-ozempic-20-mg.webp',
  'Semaglutide Ozempic 5 mg':'semaglutide/semaglutide-ozempic-5-mg.webp','Semaglutide Ozempic 10 mg':'semaglutide/semaglutide-ozempic-10-mg.webp','Semaglutide Ozempic 20 mg':'semaglutide/semaglutide-ozempic-20-mg.webp','Semaglutide Ozempic 30 mg':'semaglutide/semaglutide-ozempic-30-mg.webp',
  'Ipamorelin 2 mg':'ipamorelin/ipamorelin-2-mg.webp','Ipamorelin 5 mg':'ipamorelin/ipamorelin-5-mg.webp','Ipamorelin 10 mg':'ipamorelin/ipamorelin-10-mg.webp',
  'iPamorelin 2 mg':'ipamorelin/ipamorelin-2-mg.webp','iPamorelin 5 mg':'ipamorelin/ipamorelin-5-mg.webp','iPamorelin 10 mg':'ipamorelin/ipamorelin-10-mg.webp',
  'Melanotan-2 10 mg':'melanotan-2/melanotan-2-10-mg.webp','Melanotan 2 10 mg':'melanotan-2/melanotan-2-10-mg.webp',
  'CJC-1295 5 mg':'cjc-1295/cjc-1295-5-mg.webp','CJC-1295 10 mg':'cjc-1295/cjc-1295-10-mg.webp','CJC-1295 2 mg':'cjc-1295/cjc-1295-2-mg.webp',
  'RetaTrutide 5 mg':'retatrutide/retatrutide-5-mg.webp','RetaTrutide 10 mg':'retatrutide/retatrutide-10-mg.webp','Retatrutide 10 mg':'retatrutide/retatrutide-10-mg.webp','RetaTrutide 20 mg':'retatrutide/retatrutide-20-mg.webp','Retatrutide 20 mg':'retatrutide/retatrutide-20-mg.webp','RetaTrutide 30 mg':'retatrutide/retatrutide-30-mg.webp','Retatrutide 30 mg':'retatrutide/retatrutide-30-mg.webp','RetaTrutide 40 mg':'retatrutide/retatrutide-40-mg.webp','Retatrutide 40 mg':'retatrutide/retatrutide-40-mg.webp','RetaTrutide 50 mg':'retatrutide/retatrutide-50-mg.webp','Retatrutide 50 mg':'retatrutide/retatrutide-50-mg.webp','RetaTrutide 60 mg':'retatrutide/retatrutide-60-mg.webp','Retatrutide 60 mg':'retatrutide/retatrutide-60-mg.webp','RetaTrutide 100 mg':'retatrutide/retatrutide-100-mg.webp','Retatrutide 100 mg':'retatrutide/retatrutide-100-mg.webp',
  'MOTS-C 10 mg':'mots-c/mots-c-10-mg.webp','MOTS-c 10 mg':'mots-c/mots-c-10-mg.webp','MOTS-C 15 mg':'mots-c/mots-c-15-mg.webp','MOTS-c 15 mg':'mots-c/mots-c-15-mg.webp','MOTS-C 20 mg':'mots-c/mots-c-20-mg.webp','MOTS-c 20 mg':'mots-c/mots-c-20-mg.webp','MOTS-C 40 mg':'mots-c/mots-c-40-mg.webp','MOTS-c 40 mg':'mots-c/mots-c-40-mg.webp',
  'PT-141 10 mg':'pt-141/pt-141-10-mg.webp',
  'NAD+ 100 mg':'nad-plus/nad-100-mg.webp','NAD 100 mg':'nad-plus/nad-100-mg.webp','NAD+ 300 mg':'nad-plus/nad-300-mg.webp','NAD 300 mg':'nad-plus/nad-300-mg.webp','NAD+ 500 mg':'nad-plus/nad-500-mg.webp','NAD 500 mg':'nad-plus/nad-500-mg.webp','NAD+ 1000 mg':'nad-plus/nad-1000-mg.webp','NAD 1000 mg':'nad-plus/nad-1000-mg.webp',
  'Lemon Bottle 10 mg':'lemon-bottle/lemon-bottle-10-mg.webp',
  'Kisspeptin 5 mg':'kiss-peptin/kiss-peptin-5-mg.webp','Kiss-Peptin 5 mg':'kiss-peptin/kiss-peptin-5-mg.webp','Kisspeptin 10 mg':'kiss-peptin/kiss-peptin-10-mg.webp','Kiss-Peptin 10 mg':'kiss-peptin/kiss-peptin-10-mg.webp',
  'KLOW 80 mg':'klow-blend/klow-80-mg.webp','KLOW Blend 80 mg':'klow-blend/klow-80-mg.webp',
  'Epithalon 10 mg':'epithalon/epithalon-10-mg.webp','Epithalon 50 mg':'epithalon/epithalon-50-mg.webp','Epitalon 10 mg':'epithalon/epithalon-10-mg.webp','Epitalon 50 mg':'epithalon/epithalon-50-mg.webp',
  'AOD-9604 2 mg':'aod-9604/aod-9604-2-mg.webp','AOD 9604 2 mg':'aod-9604/aod-9604-2-mg.webp','AOD-9604 5 mg':'aod-9604/aod-9604-5-mg.webp','AOD 9604 5 mg':'aod-9604/aod-9604-5-mg.webp','AOD-9604 10 mg':'aod-9604/aod-9604-10-mg.webp','AOD 9604 10 mg':'aod-9604/aod-9604-10-mg.webp',
  'Selank 5 mg':'selank/selank-5-mg.webp','Selank 10 mg':'selank/selank-10-mg.webp',
  'Semax 5 mg':'semax/semax-5-mg.webp','Semax 10 mg':'semax/semax-10-mg.webp','SEMAX 5 mg':'semax/semax-5-mg.webp','SEMAX 10 mg':'semax/semax-10-mg.webp',
  'SS-31 10 mg':'ss-31/ss-31-10-mg.webp','SS-31 50 mg':'ss-31/ss-31-50-mg.webp',
  'Snap-8 10 mg':'snap-8/snap-8-10-mg.webp','SNAP-8 10 mg':'snap-8/snap-8-10-mg.webp',
  'Oxytocin 2 mg':'oxytocin/oxytocin-2-mg.webp','Oxytocin 5 mg':'oxytocin/oxytocin-5-mg.webp','Oxytocin 10 mg':'oxytocin/oxytocin-10-mg.webp',
  'Cerebrolysin 60 mg':'cerebrolysin/cerebrolysin-60-mg.webp',
  'ARA-290 10 mg':'ara-290/ara-290-10-mg.webp',
  'DSIP 10 mg':'dsip/dsip-10-mg.webp','DSIP 20 mg':'dsip/dsip-20-mg.webp','DSiP 10 mg':'dsip/dsip-10-mg.webp','DSiP 20 mg':'dsip/dsip-20-mg.webp',
  'Dihexa 10 mg':'dihexa/dihexa-10-mg.webp','DiHexa 10 mg':'dihexa/dihexa-10-mg.webp',
  'LL-37 5 mg':'ll-37/ll-37-5-mg.webp',
  'Follistatin 1 mg':'follistatin/fullistatin-1-mg.webp','Fullistatin 1 mg':'follistatin/fullistatin-1-mg.webp',
  'CAQK 10 mg':'caqk/caqk-10-mg.webp',
  'AHK-Cu 50 mg':'ahk-cu/ahk-cu-50-mg.webp','AHK-Cu 100 mg':'ahk-cu/ahk-cu-100-mg.webp',
  'CJC-1295 No DAC Ipamorelin 10 mg':'cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-10-mg.webp','CJC-1295 No Dac Ipamorelin 10 mg':'cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-10-mg.webp','CJC Ipamorelin 10 mg':'cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-10-mg.webp',
  'CJC-1295 ( No DAC )  + iPA 2 mg':'cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-2-mg.webp','CJC-1295 ( No DAC )  + iPA 5 mg':'cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-5-mg.webp','CJC-1295 ( No DAC )  + iPA 10 mg':'cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-10-mg.webp','CJC-1295 No Dac + iPA 10 mg':'cjc-1295-no-dac-ipamorelin/cjc-1295-no-dac-ipa-10-mg.webp',
  'CJC-1295 ( with + DAC ) 2 mg':'cjc-1295-dac/cjc-1295-dac-2-mg.webp','CJC-1295 ( with + DAC ) 5 mg':'cjc-1295-dac/cjc-1295-dac-5-mg.webp','CJC-1295 ( with + DAC ) 10 mg':'cjc-1295-dac/cjc-1295-dac-10-mg.webp',
  'KPV 5 mg':'kpv/kpv-5-mg.webp','KPV 10 mg':'kpv/kpv-10-mg.webp',
  'Tesamorelin 2 mg':'tesamorelin/tesamorelin-2-mg.webp','Tesamorelin 5 mg':'tesamorelin/tesamorelin-5-mg.webp','Tesamorelin 10 mg':'tesamorelin/tesamorelin-10-mg.webp','Tesamorelin 20 mg':'tesamorelin/tesamorelin-20-mg.webp',
  'Gonadorelin 2 mg':'gonadorelin/gonadorelin-2-mg.webp',
  'HMG 75 IU':'hmg/hmg-75-iu.webp','HMG 75 iu':'hmg/hmg-75-iu.webp','HMG 75 iU':'hmg/hmg-75-iu.webp',
  'VIP 5 mg':'vip/vip-5-mg.webp','VIP 10 mg':'vip/vip-10-mg.webp','ViP 5 mg':'vip/vip-5-mg.webp','ViP 10 mg':'vip/vip-10-mg.webp','ViP 20 mg':'vip/vip-20-mg.webp',
  'Tirzepatide 5 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-5-mg.webp','Tirzepatide 10 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-10-mg.webp','Tirzepatide 20 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-20-mg.webp','Tirzepatide 30 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-30-mg.webp','Tirzepatide 40 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-40-mg.webp','Tirzepatide 50 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-50-mg.webp','Tirzepatide 60 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-60-mg.webp','Tirzepatide 100 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-100-mg.webp',
  'Tirzepatide Mounjaro 5 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-5-mg.webp','Tirzepatide Mounjaro 10 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-10-mg.webp','Tirzepatide Mounjaro 20 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-20-mg.webp','Tirzepatide Mounjaro 30 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-30-mg.webp','Tirzepatide Mounjaro 40 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-40-mg.webp','Tirzepatide Mounjaro 50 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-50-mg.webp','Tirzepatide Mounjaro 60 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-60-mg.webp','Tirzepatide Mounjaro 100 mg':'tirzepatide-mounjaro/tirzepatide-mounjaro-100-mg.webp',
  'HGH Fragment 176-191':'hgh-176-191/hgh-176-191-default.webp','HGH 176-191':'hgh-176-191/hgh-176-191-default.webp','Fragment 176-191':'hgh-176-191/hgh-176-191-default.webp',
  'HGH Fragment 176-191 2 mg':'hgh-176-191/hgh-176-191-2-mg.webp','HGH Fragment 176-191 5 mg':'hgh-176-191/hgh-176-191-5-mg.webp','HGH Fragment 176-191 10 mg':'hgh-176-191/hgh-176-191-10-mg.webp','HGH Fragment 176-191 15 mg':'hgh-176-191/hgh-176-191-15-mg.webp',
  'Adipotide':'adipotide/adipotide-default.webp','Adipotide ( FTTP ) 2 mg':'adipotide/adipotide-2-mg.webp','Adipotide ( FTTP ) 5 mg':'adipotide/adipotide-5-mg.webp','Adipotide ( FTTP ) 10 mg':'adipotide/adipotide-10-mg.webp','Adipotide 2 mg':'adipotide/adipotide-2-mg.webp','Adipotide 5 mg':'adipotide/adipotide-5-mg.webp','Adipotide 10 mg':'adipotide/adipotide-10-mg.webp',
  '5-Amino-1MQ 5 mg':'5-amino-1mq/5-amino-1mq-5-mg.webp','5 Amino 1MQ 5 mg':'5-amino-1mq/5-amino-1mq-5-mg.webp','5-Amino-1MQ 10 mg':'5-amino-1mq/5-amino-1mq-10-mg.webp','5 Amino 1MQ 10 mg':'5-amino-1mq/5-amino-1mq-10-mg.webp','5-Amino-1MQ 50 mg':'5-amino-1mq/5-amino-1mq-50-mg.webp','5 Amino 1MQ 50 mg':'5-amino-1mq/5-amino-1mq-50-mg.webp',
  'SLU-PP-322':'slu-pp-322/slu-pp-322-default.webp','SLU-PP-322 5 mg':'slu-pp-322/slu-pp-322-5-mg.webp','SLU-PP-322 10 mg':'slu-pp-322/slu-pp-322-10-mg.webp','SLU-PP-322 20 mg':'slu-pp-322/slu-pp-322-20-mg.webp',
  'L-Carnitine':'l-carnitine/l-carnitine-default.webp','L-Carnitine 600 mg':'l-carnitine/l-carnitine-600-mg.webp','L-Carnitine 1200 mg':'l-carnitine/l-carnitine-1200-mg.webp',
  'HGH 191AA':'hgh-191aa/hgh-191aa-default.webp','HGH-191aa':'hgh-191aa/hgh-191aa-default.webp',
  'HGH 191aa ( Somatropin ) 6 iU':'hgh-191aa/hgh-191aa-6-iu.webp','HGH 191aa ( Somatropin ) 8 iU':'hgh-191aa/hgh-191aa-8-iu.webp','HGH 191aa ( Somatropin ) 10 iU':'hgh-191aa/hgh-191aa-10-iu.webp','HGH 191aa ( Somatropin ) 12 iU':'hgh-191aa/hgh-191aa-12-iu.webp','HGH 191aa ( Somatropin ) 15 iU':'hgh-191aa/hgh-191aa-15-iu.webp','HGH 191aa ( Somatropin ) 24 iU':'hgh-191aa/hgh-191aa-24-iu.webp','HGH 191aa ( Somatropin ) 36 iU':'hgh-191aa/hgh-191aa-36-iu.webp',
  'Sermorelin':'sermorelin/sermorelin-default.webp','Sermorelin Acetate 5 mg':'sermorelin/sermorelin-5-mg.webp','Sermorelin Acetate 10 mg':'sermorelin/sermorelin-10-mg.webp','Sermorelin Acetate 20 mg':'sermorelin/sermorelin-20-mg.webp',
  'GHRP-2':'ghrp-2/ghrp-2-default.webp','GHRP-2 5 mg':'ghrp-2/ghrp-2-5-mg.webp','GHRP-2 10 mg':'ghrp-2/ghrp-2-10-mg.webp','GHRP-2 20 mg':'ghrp-2/ghrp-2-20-mg.webp','GHRP-2 Acetate 5 mg':'ghrp-2/ghrp-2-5-mg.webp','GHRP-2 Acetate 10 mg':'ghrp-2/ghrp-2-10-mg.webp','GHRP-2 Acetate 20 mg':'ghrp-2/ghrp-2-20-mg.webp',
  'GHRP-6':'ghrp-6/ghrp-6-default.webp','GHRP-6 5 mg':'ghrp-6/ghrp-6-5-mg.webp','GHRP-6 10 mg':'ghrp-6/ghrp-6-10-mg.webp','GHRP-6 20 mg':'ghrp-6/ghrp-6-20-mg.webp','GHRP-6 Acetate 5 mg':'ghrp-6/ghrp-6-5-mg.webp','GHRP-6 Acetate 10 mg':'ghrp-6/ghrp-6-10-mg.webp','GHRP-6 Acetate 20 mg':'ghrp-6/ghrp-6-20-mg.webp',
  'Hexarelin':'hexarelin/hexarelin-default.webp','Hexarelin Acetate 2 mg':'hexarelin/hexarelin-2-mg.webp','Hexarelin Acetate 5 mg':'hexarelin/hexarelin-5-mg.webp','Hexarelin Acetate 10 mg':'hexarelin/hexarelin-10-mg.webp',
  'MK-677':'mk-677/mk-677-default.webp','MK-677 ( iPutamoren ) 5 mg':'mk-677/mk-677-5-mg.webp','MK-677 ( iPutamoren ) 10 mg':'mk-677/mk-677-10-mg.webp','MK-677 10 MG':'mk-677/mk-677-10-mg.webp',
  'IGF-1 LR3':'igf-1-lr3/igf-1-lr3-default.webp','IGF-1-LR3':'igf-1-lr3/igf-1-lr3-default.webp','iGF-1 LR3 0.1 mg':'igf-1-lr3/igf-1-lr3-01-mg.webp','iGF-1 LR3 1 mg':'igf-1-lr3/igf-1-lr3-1-mg.webp',
  'IGF-1 DES':'igf-des/igf-des-default.webp','IGF-DES':'igf-des/igf-des-default.webp','iGF-1 DES 2 mg':'igf-des/igf-des-2-mg.webp','iGF-1 DES 5 mg':'igf-des/igf-des-5-mg.webp',
  'MGF':'mgf-peg-mgf/mgf-peg-mgf-default.webp','PEG-MGF':'mgf-peg-mgf/mgf-peg-mgf-default.webp','MGF PEG-MGF':'mgf-peg-mgf/mgf-peg-mgf-default.webp','MGF 2 mg':'mgf-peg-mgf/mgf-2-mg.webp','MGF 5 mg':'mgf-peg-mgf/mgf-5-mg.webp','PEG - MGF 2 mg':'mgf-peg-mgf/peg-mgf-2-mg.webp','PEG-MGF 2 mg':'mgf-peg-mgf/peg-mgf-2-mg.webp','PEG-MGF 5 mg':'mgf-peg-mgf/peg-mgf-5-mg.webp','PEG-MGF 10 mg':'mgf-peg-mgf/peg-mgf-10-mg.webp',
  'ACE-031':'ace-031/ace-031-default.webp','ACE-031 1 mg':'ace-031/ace-031-default.webp',
  'AICAR':'aicar/aicar-default.webp','AiCAR 50 mg':'aicar/aicar-50-mg.webp','AiCAR 100 mg':'aicar/aicar-100-mg.webp',
  'EPO':'epo/epo-default.webp','EPO ( Erythropoietin ) 3000 iU':'epo/epo-3000-iu.webp','EPO ( Erythropoietin ) 5000 iU':'epo/epo-5000-iu.webp',
  'CJC-1295 DAC':'cjc-1295-dac/cjc-1295-dac-default.webp',
  'BPC-TB Blend':'bpc-tb-blend/bpc-tb-blend-default.webp','BPC TB Blend':'bpc-tb-blend/bpc-tb-blend-default.webp','BPC-157 + TB-500 10 mg':'bpc-tb-blend/bpc-tb-blend-10-mg.webp','BPC-157 + TB-500 20 mg':'bpc-tb-blend/bpc-tb-blend-20-mg.webp','BPC-157 + TB-500 Mix 10 mg':'bpc-tb-blend/bpc-tb-blend-10-mg.webp','BPC-157 + TB-500 Mix 20 mg':'bpc-tb-blend/bpc-tb-blend-20-mg.webp',
  'Cartalax':'cartalax/cartalax-default.webp','Cartalax 10 mg':'cartalax/cartalax-10-mg.webp','Cartalax 20 mg':'cartalax/cartalax-20-mg.webp',
  'B7-33':'b7-33/b7-33-default.webp','B7-33 2 mg':'b7-33/b7-33-2-mg.webp','B7-33 10 mg':'b7-33/b7-33-10-mg.webp',
  'FOXO4-DRI':'foxo4-dri/foxo4-dri-default.webp','FOXO4-DRi 10 mg':'foxo4-dri/foxo4-dri-10-mg.webp','FOXO4-DRi 20 mg':'foxo4-dri/foxo4-dri-20-mg.webp',
  'Humanin':'humanin/humanin-default.webp','Humanin 10 mg':'humanin/humanin-10-mg.webp','Humanin 20 mg':'humanin/humanin-20-mg.webp',
  'Thymosin Alpha-1':'thymosin-alpha-1/thymosin-alpha-1-default.webp','Thymosin Alpha 1':'thymosin-alpha-1/thymosin-alpha-1-default.webp','Thymosin Alpha-1 5 mg':'thymosin-alpha-1/thymosin-alpha-1-5-mg.webp','Thymosin Alpha-1 10 mg':'thymosin-alpha-1/thymosin-alpha-1-10-mg.webp','Thymosin Alpha-1 20 mg':'thymosin-alpha-1/thymosin-alpha-1-20-mg.webp',
  'Thymalin':'thymalin/thymalin-default.webp','Thymalin 10 mg':'thymalin/thymalin-10-mg.webp','Thymalin 20 mg':'thymalin/thymalin-20-mg.webp',
  'Adamax':'adamax/adamax-default.webp','ADAMAX 5 mg':'adamax/adamax-5-mg.webp','ADAMAX 10 mg':'adamax/adamax-10-mg.webp',
  'Pinealon':'pinealon/pinealon-default.webp','P21 - Pinealon 5 mg':'pinealon/pinealon-5-mg.webp','P21 - Pinealon 10 mg':'pinealon/pinealon-10-mg.webp','P21 - Pinealon 20 mg':'pinealon/pinealon-20-mg.webp',
  'Cortagen':'cortagen/cortagen-default.webp','Cortagen 10 mg':'cortagen/cortagen-10-mg.webp','Cortagen 20 mg':'cortagen/cortagen-20-mg.webp',
  'HCG':'hcg/hcg-default.webp','HCG ( Human Chorionic Gonadotropin ) 1000 iU':'hcg/hcg-1000-iu.webp','HCG ( Human Chorionic Gonadotropin ) 2000 iU':'hcg/hcg-2000-iu.webp','HCG ( Human Chorionic Gonadotropin ) 5000 iU':'hcg/hcg-5000-iu.webp','HCG ( Human Chorionic Gonadotropin ) 10.000 iU':'hcg/hcg-10000-iu.webp',
  'Testagen':'testagen/testagen-default.webp','Testagen 10 mg':'testagen/testagen-10-mg.webp','Testagen 20 mg':'testagen/testagen-20-mg.webp',
  'Melanotan-1':'melanotan-1/melanotan-1-default.webp','Melanotan 1':'melanotan-1/melanotan-1-default.webp','Melanotan 1 10 mg':'melanotan-1/melanotan-1-10-mg.webp',
  'Cardiogen':'cardiogen/cardiogen-default.webp','Cardiogen 10 mg':'cardiogen/cardiogen-10-mg.webp','Cardiogen 20 mg':'cardiogen/cardiogen-20-mg.webp',
  'Bronchogen':'bronchogen/bronchogen-default.webp','Bronchogen  Chonluten 10 mg':'bronchogen/bronchogen-10-mg.webp','Bronchogen  Chonluten 20 mg':'bronchogen/bronchogen-20-mg.webp','Chonluten 5 mg':'bronchogen/bronchogen-5-mg.webp','Chonluten 10 mg':'bronchogen/bronchogen-10-mg.webp',
  'Pancragen':'pancragen/pancragen-default.webp','Pancragen 5 mg':'pancragen/pancragen-5-mg.webp','Pancragen 10 mg':'pancragen/pancragen-10-mg.webp','Pancragen 20 mg':'pancragen/pancragen-20-mg.webp',
  'Teriparatide':'teriparatide/teriparatide-default.webp','Teriparatide 5 mg':'teriparatide/teriparatide-5-mg.webp','Teriparatide 10 mg':'teriparatide/teriparatide-10-mg.webp','Teriparatide 20 mg':'teriparatide/teriparatide-20-mg.webp',
  'PNC-27':'pnc-27/pnc-27-default.webp','PNC-27 5 mg':'pnc-27/pnc-27-5-mg.webp','PNC-27 10 mg':'pnc-27/pnc-27-10-mg.webp',
  'Dermorphin':'dermorphin/dermorphin-default.webp','Dermorphin 5 mg':'dermorphin/dermorphin-5-mg.webp','Dermorphin 10 mg':'dermorphin/dermorphin-10-mg.webp',
  'Chloramphenicol':'chloramphenicol/chloramphenicol-default.webp','Chloramphenicol 2 mg':'chloramphenicol/chloramphenicol-default.webp',
  'Vitamin B12':'vitamin-b12/vitamin-b12-default.webp','Vitamin B-12 ( Cobalamin ) 10 mg':'vitamin-b12/vitamin-b12-10-mg.webp','Vitamin B-12 ( Cobalamin ) 20 mg':'vitamin-b12/vitamin-b12-20-mg.webp','Vitamin B-12 10 mg':'vitamin-b12/vitamin-b12-10-mg.webp','Vitamin B-12 20 mg':'vitamin-b12/vitamin-b12-20-mg.webp',
  'Melatonin Injectable':'melatonin-injectable/melatonin-injectable-default.webp','Melatonin':'melatonin-injectable/melatonin-injectable-default.webp',
  'BAC Water':'bac-water/bac-water-default.webp','Bac Water':'bac-water/bac-water-default.webp','Bacteriostatic Water ( BAC Water ) 10 ml':'bac-water/bac-water-default.webp',
  'Mazdutide':'mazdutide/mazdutide-default.webp','Mazdutide 5 mg':'mazdutide/mazdutide-5-mg.webp','Mazdutide 10 mg':'mazdutide/mazdutide-10-mg.webp','Mazdutide 20 mg':'mazdutide/mazdutide-20-mg.webp',
  'Survodutide':'survodutide/survodutide-default.webp','Survodutide 5 mg':'survodutide/survodutide-5-mg.webp','Survodutide 10 mg':'survodutide/survodutide-10-mg.webp','Survodutide 20 mg':'survodutide/survodutide-20-mg.webp',
  'Cagrilintide':'cagrilintide/cagrilintide-default.webp','Cagrilintide 5 mg':'cagrilintide/cagrilintide-5-mg.webp','Cagrilintide 10 mg':'cagrilintide/cagrilintide-10-mg.webp',
  'Vesugen 10 mg':'vesugen/vesugen-10-mg.webp','Vesugen 20 mg':'vesugen/vesugen-20-mg.webp',
};
let moved=0,skipped=0,notFound=[];
if(!fs.existsSync(SOURCE_DIR)){console.error('ERROR: '+SOURCE_DIR+' not found');process.exit(1);}
const files=fs.readdirSync(SOURCE_DIR);
console.log('Moving '+files.length+' files from 0/webp...');
for(const file of files){
  if(path.extname(file).toLowerCase()!=='.webp')continue;
  const base=path.basename(file,'.webp');
  const dest=FILE_MAP[base];
  if(!dest){notFound.push(file);continue;}
  const destPath=path.join(DEST_DIR,dest);
  const destDir=path.dirname(destPath);
  if(!fs.existsSync(destDir))fs.mkdirSync(destDir,{recursive:true});
  if(fs.existsSync(destPath)){console.log('SKIP: '+dest);skipped++;}
  else{fs.copyFileSync(path.join(SOURCE_DIR,file),destPath);fs.unlinkSync(path.join(SOURCE_DIR,file));console.log('MOVED: '+file+' -> '+dest);moved++;}
}
console.log('\nDone! Moved:'+moved+' Skipped:'+skipped+' NotFound:'+notFound.length);
if(notFound.length)console.log('Not mapped:\n'+notFound.join('\n'));
