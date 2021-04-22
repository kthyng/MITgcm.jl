var documenterSearchIndex = {"docs":
[{"location":"#MITgcmTools.jl","page":"Home","title":"MITgcmTools.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Set of tools for running MITgcm, analyzing its output, and/or modifying its inputs. A set of Pluto.jl notebooks, which e.g. run MITgcm interactively, can be found in the examples/ folder.","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: Simulated particles from HS94 on cube sphere grid)","category":"page"},{"location":"#Example-Guide","page":"Home","title":"Example Guide","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To load one of the notebooks using Pluto.jl: ","category":"page"},{"location":"","page":"Home","title":"Home","text":"open julia in terminal window\ntype the following commands at the Julia prompt\nin web-browser, open one of the notebooks listed hereafter","category":"page"},{"location":"","page":"Home","title":"Home","text":"cd(\"examples/\")\nusing Pluto\nPluto.run()","category":"page"},{"location":"#Examples-/-Running-Models","page":"Home","title":"Examples / Running Models","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"MITgcm_configurations.jl : explore MITgcm configurations and their parameters.\nMITgcm_worklow.jl : build, setup, run, and plot for any standard configuration.\nrun_MITgcm.jl : a more detailed look into compiling and running the model.","category":"page"},{"location":"#Examples-/-Analyzing-Results","page":"Home","title":"Examples / Analyzing Results","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"HS94_plotmap.jl : read hs94.cs-32x32x5 output, interpolate, and plot map\nHS94_particles.jl : compute particle trajectories from hs94.cs-32x32x5 output\nHS94_Makie.jl : example using Makie.jl instead of Plots.jl","category":"page"},{"location":"#Explore-And-Run-MITgcm","page":"Home","title":"Explore And Run MITgcm","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The recommended, simple, method to run the model is via the climate model interface (see docs@ClimateModels.jl for detail). The MITgcm_launch function can be used to run a MITgcm configuration after setting up the MITgcm_config. Using this interface facilitates operations like compiling and setting up a temporary folder to run the model. Key functions, incl. the climate model interface, are documented further down in the docs. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"The verification_experiments function provides a list of the most-standard MITgcm configurations that can all be run either in batch mode or interactively. The MITgcm_path variable points to where MITgcm is compiled. Interactive / reactive notebooks are found in the examples/ folder (e.g. run_MITgcm.jl  seen just below). ","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: Compiling and running MITgcm)","category":"page"},{"location":"","page":"Home","title":"Home","text":"testreport\nverification_experiments\nMITgcm_namelist","category":"page"},{"location":"#MITgcmTools.testreport","page":"Home","title":"MITgcmTools.testreport","text":"testreport(nam::String,ext=\"\")\n\nRun the testreport script for one model config nam (or \"all\"), with additional options (optional) speficied in ext\n\nusing MITgcmTools\ntestreport(MITgcm_config(configuration=\"front_relax\"),\"-norun\")\n#testreport(MITgcm_config(configuration=\"all\"),\"-norun\")\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.verification_experiments","page":"Home","title":"MITgcmTools.verification_experiments","text":"verification_experiments()\n\nGet list of all most-standard configurations of MITgcm and return as an Array of MITgcm_config\n\nusing MITgcmTools\nexps=verification_experiments()\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.MITgcm_namelist","page":"Home","title":"MITgcmTools.MITgcm_namelist","text":"MITgcm_namelist(groups,params)\n\nData structure representing a MITgcm namelist file, such as data.pkg, which contains \n\n    groups :: Array{Symbol,1} = Array{Symbol,1}(undef, 0)\n    params :: Array{OrderedDict{Symbol,Any},1} = Array{OrderedDict{Symbol,Any},1}(undef, 0)\n\nwith model parameters (params) being organized in groups as done in the files.\n\nusing MITgcmTools\nfil=joinpath(MITgcm_path,\"verification\",\"advect_xy\",\"run\",\"data\")\nnml=read_namelist(fil)\nMITgcm_namelist(nml.groups,nml.params)\nMITgcm_namelist(groups=nml.groups,params=nml.params)\nMITgcm_namelist(groups=nml.groups)\n\n\n\n\n\n","category":"type"},{"location":"#ClimateModels-/-MITgcm-interface","page":"Home","title":"ClimateModels / MITgcm interface","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"MITgcm_config\nbuild\ncompile \nsetup\nMITgcm_launch\nclean","category":"page"},{"location":"#MITgcmTools.MITgcm_config","page":"Home","title":"MITgcmTools.MITgcm_config","text":"MITgcm_config()\n\nConcrete type of AbstractModelConfig for MITgcm which contains\n\n    model :: String = \"MITgcm\"\n    configuration :: String = \"\"\n    options :: OrderedDict{Any,Any} = OrderedDict{Any,Any}()\n    inputs :: OrderedDict{Any,Any} = OrderedDict{Any,Any}()\n    outputs :: OrderedDict{Any,Any} = OrderedDict{Any,Any}()\n    status :: OrderedDict{Any,Any} = OrderedDict{Any,Any}()\n    channel :: Channel{Any} = Channel{Any}(10) \n    folder :: String = tempdir()\n    ID :: UUID = UUIDs.uuid4()\n\nand with defaults that can be constructed as follows for example\n\nusing MITgcmTools\ntmp=MITgcm_config()\n\nexps=verification_experiments()\nexps[end]\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\n","category":"type"},{"location":"#ClimateModels.compile","page":"Home","title":"ClimateModels.compile","text":"compile(config::MITgcm_config)\n\nCompile the model using make in build/ that has already been setup.\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\n","category":"function"},{"location":"#ClimateModels.setup","page":"Home","title":"ClimateModels.setup","text":"setup(config::MITgcm_config)\n\nCreate a run/ folder and link everything there as needed to be ready to run model as  normally done for most-standard MITgcm configurations (incl. prepare_run and mitgcmuv). Call git_log_init(config) to setup git tracker and put!(config.channel,MITgcm_launch)  to be executed via launch(config) later.\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.MITgcm_launch","page":"Home","title":"MITgcmTools.MITgcm_launch","text":"MITgcm_launch(config::MITgcm_config)\n\nGo to run/ folder and effectively call mitgcmuv > output.txt\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\n","category":"function"},{"location":"#ClimateModels.clean","page":"Home","title":"ClimateModels.clean","text":"clean(config::MITgcm_config)\n\nCancel any remaining task (config.channel), clean up the build  directory (via testreport), and clean the run directory (via rm).\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\n","category":"function"},{"location":"#Reading-MITgcm-outputs","page":"Home","title":"Reading MITgcm outputs","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"read_mdsio\nread_meta\nread_namelist\nwrite_namelist\nread_available_diagnostics\nread_bin\nread_flt\nread_nctiles","category":"page"},{"location":"#MITgcmTools.read_mdsio","page":"Home","title":"MITgcmTools.read_mdsio","text":"read_mdsio(datafile)\n\nRead a MITgcm mdsio file (\".data\" binary + \".meta\" text pair), and return as an Array\n\np=\"./hs94.cs-32x32x5/run/\"\nx=read_mdsio(p*\"surfDiag.0000000020.002.001.data\")\ny=read_mdsio(p*\"pickup.ckptA.002.001.data\")\nz=read_mdsio(p*\"T.0000000000.002.001.data\")\n\n\n\n\n\nread_mdsio(pth::String,fil::String)\n\nRead a MITgcm's MDSIO files (\".data\" binary + \".meta\" text pair), combine, and return as an Array\n\np=\"./hs94.cs-32x32x5/run/\"\nx=read_mdsio(p,\"surfDiag.0000000020\")\ny=read_mdsio(p,\"pickup.ckptA\")\nz=read_mdsio(p,\"T.0000000000\")\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.read_meta","page":"Home","title":"MITgcmTools.read_meta","text":"read_meta(metafile)\n\nRead a MITgcm metadata file, parse it, and return as a NamedTuple\n\np=\"./hs94.cs-32x32x5/run/\"\nmeta=read_meta(p*\"surfDiag.0000000020.002.001.meta\")\npairs(meta)\nmeta.dimList\n\n\n\n\n\nread_meta(pth::String,fil::String)\n\nRead a MITgcm metadata files, parse them, and return as an array of NamedTuple\n\np=\"./hs94.cs-32x32x5/run/\"\nmeta=read_meta(p,\"surfDiag.0000000020\")\npairs(meta[end])\n[meta[i].dimList for i in 1:length(meta)]\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.read_namelist","page":"Home","title":"MITgcmTools.read_namelist","text":"read_namelist(fil)\n\nRead a MITgcm namelist file, parse it, and return as a NamedTuple\n\nusing MITgcmTools\ntestreport(\"advect_xy\")\nfil=joinpath(MITgcm_path,\"verification\",\"advect_xy\",\"run\",\"data\")\nnamelist=read_namelist(fil)\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.write_namelist","page":"Home","title":"MITgcmTools.write_namelist","text":"write_namelist(fil)\n\nSave a MITgcm namelist file. In the example below, one is read from file, modified, and then saved to a new file using write_namelist.\n\nusing MITgcmTools\nfil=joinpath(MITgcm_path,\"verification\",\"advect_xy\",\"run\",\"data\")\nnml=read_namelist(fil)\nwrite_namelist(fil*\"_new\",namelist)\n\nor \n\nnml=read(fil,MITgcm_namelist())\nwrite(fil*\"_new\",nml)\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.read_available_diagnostics","page":"Home","title":"MITgcmTools.read_available_diagnostics","text":"read_available_diagnostics(fldname::String; filename=\"available_diagnostics.log\")\n\nGet the information for a particular variable fldname from the  available_diagnostics.log text file generated by MITgcm.\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.read_bin","page":"Home","title":"MITgcmTools.read_bin","text":"read_bin(fil::String,kt::Union{Int,Missing},kk::Union{Int,Missing},prec::DataType,mygrid::gcmgrid)\n\nRead model output from binary file and convert to MeshArray. Other methods:\n\nread_bin(fil::String,prec::DataType,mygrid::gcmgrid)\nread_bin(fil::String,mygrid::gcmgrid)\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.read_flt","page":"Home","title":"MITgcmTools.read_flt","text":"read_flt(dirIn::String,prec::DataType)\n\nRead displacements from MITgcm/pkg/flt output file into a DataFrame.\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.read_nctiles","page":"Home","title":"MITgcmTools.read_nctiles","text":"read_nctiles(fileName,fldName,mygrid)\n\nRead model output from NCTiles file and convert to MeshArray instance.\n\nmygrid=GridSpec(\"LatLonCap\")\nfileName=\"nctiles_grid/GRID\"\nDepth=read_nctiles(fileName,\"Depth\",mygrid)\nhFacC=read_nctiles(fileName,\"hFacC\",mygrid)\nhFacC=read_nctiles(fileName,\"hFacC\",mygrid,I=(:,:,1))\n\n\n\n\n\n","category":"function"},{"location":"#Format-conversions","page":"Home","title":"Format conversions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: The impossible MITgcm rendering)","category":"page"},{"location":"","page":"Home","title":"Home","text":"findtiles\ncube2compact\ncompact2cube\nconvert2array\nconvert2gcmfaces","category":"page"},{"location":"#MITgcmTools.findtiles","page":"Home","title":"MITgcmTools.findtiles","text":"findtiles(ni::Int,nj::Int,mygrid::gcmgrid)\nfindtiles(ni::Int,nj::Int,grid::String=\"LatLonCap\",GridParentDir=\"../inputs/GRID_LLC90/\")\n\nReturn a MeshArray map of tile indices, mytiles[\"tileNo\"], for tile size ni,nj and extract grid variables accordingly.\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.cube2compact","page":"Home","title":"MITgcmTools.cube2compact","text":"cube2compact(x::Array)\n\nReshape from e.g. size (192, 32, 5) in cube format to (32, 192, 5) in compact format.\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.compact2cube","page":"Home","title":"MITgcmTools.compact2cube","text":"compact2cube(x::Array)\n\nReshape from e.g. size (32, 192, 5) in cube format to (192, 32, 5) in compact format.\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.convert2array","page":"Home","title":"MITgcmTools.convert2array","text":"convert2array(fld::MeshArray)\n\nConvert MeshArray to Array (or vice versa otherwise)\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.convert2gcmfaces","page":"Home","title":"MITgcmTools.convert2gcmfaces","text":"convert2gcmfaces(fld::MeshArray)\n\nConvert mitgcm output to MeshArray (or vice versa otherwise)\n\n\n\n\n\n","category":"function"},{"location":"#Formulae-etc","page":"Home","title":"Formulae etc","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SeaWaterDensity\nMixedLayerDepth","category":"page"},{"location":"#MITgcmTools.SeaWaterDensity","page":"Home","title":"MITgcmTools.SeaWaterDensity","text":"SeaWaterDensity(Θ,Σ,Π,Π0)\n\nCompute potential density (ρP), in situ density (ρI), and density referenced to PREF (Π0 in decibars) from potential temperature (Θ in °C), salinity (Σ in psu) and pressure (Π in decibars) according to the UNESCO / Jackett & McDougall 1994 equation of state.\n\nCredits: code based on a Matlab implementation by B. Ferron Reference: https://www.jodc.go.jp/info/iocdoc/UNESCOtech/059832eb.pdf Check value: ρI = 1041.83267kg/m^3 for Θ=3°Celcius, Σ=35psu, Π=3000dbar\n\n(ρP,ρI,ρR) = SeaWaterDensity(3.,35.5,3000.)\nisapprox(ρI,1041.83267, rtol=1e-6)\n\n\n\n\n\n","category":"function"},{"location":"#MITgcmTools.MixedLayerDepth","page":"Home","title":"MITgcmTools.MixedLayerDepth","text":"MixedLayerDepth(Θ,Σ,Δ,mthd)\n\nCompute mixed layer depth from potential temperature (Θ in °C), salinity (Σ in psu) and depth (Δ in method) according to various formulas (mthd == \"BM\", \"Suga\", \"Kara\"). Inputs must be dense vectors without any missing value (or NaN, etc).\n\nD=collect(0.0:1.0:500.0); tmp=(1.0.-tanh.(5*(-1 .+ 2/D[end]*D)));\nT=2.0 .+ 8.0*tmp; S=34.0 .+ 0.5*tmp;\n(ρP,ρI,ρR) = SeaWaterDensity(T,S,D);\n\nmld=MixedLayerDepth(T,S,D,\"BM\"); isapprox(mld,134.0)\n\nusing Plots\nplot(ρP,-D,w=2,label=\"Potential Density\",ylabel=\"Depth\")\nplot!(vec([ρP[1] ρP[end]]),-fill(mld,2),label=\"Mixed Layer Depth\",w=2,c=\"black\",s=:dash)\n\n\n\n\n\n","category":"function"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
