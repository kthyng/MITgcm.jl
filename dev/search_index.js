var documenterSearchIndex = {"docs":
[{"location":"functionalities/#Manual","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"MITgcmTools.jl provides a suite of tools for analyzing MITgcm results, compiling the model, modifying its inputs, running simulations, etc all from within julia. Much of the functionalities are documented via the Examples section, as highlighted hereafter.","category":"page"},{"location":"functionalities/#Read-/-Write-MITgcm-Files","page":"Manual","title":"Read / Write MITgcm Files","text":"","category":"section"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"Let's assume that user has run an MITgcm configuration in standard fashion, and wants to examine the output in Julia. This is one of the common use case for MITgcmTools.jl.","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"The tutorial_global_oce_biogeo provided with MITgcm is a representative example. The MITgcm documentation explains how to complile and run the tutorials. Alternatively, you can just run this notebook (MITgcm_tutorial_global_oce_biogeo.jl).","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"Once the model has run, it's output is found in the run/ subfolder (of, say, folder $(pth)). The choice of $(pth) is up to the user. The first command one may want to run at this stage is scan_rundir.","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"rundir=joinpath(pth,\"run\")\nsc=scan_rundir(rundir)\nsc.completed","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"will indicate whether the model run has complete normally based upon the ending of the standard output file (output.txt or STDOUT.000). scan_rundir returns additional information from scanning the files in run/; e.g., whether the output is binary (sc.params_files.use_mdsio) or netcdf (sc.params_files.use_mnc), and what type of grid was used (sc.params_grid).","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"With this information in hand, one should be ready to read further model output. For example, one can read grid variables using either Γ=GridLoad_mdsio(rundir) or Γ=GridLoad_mnc(rundir) which will return Γ.XC, Γ.YC, etc formated using MeshArrays.jl. MITgcm_scan_output.jl does this in bulk for all configurations in MITgcm/verification and further displays each grid (this page).","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"For more on the various read / write functions, please refer to the following sections.","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"Parameter Files (text)\nMDSIO Files (binary)\nMNC Files (netcdf)\nOther Files","category":"page"},{"location":"functionalities/#MITgcm-Configurations","page":"Manual","title":"MITgcm Configurations","text":"","category":"section"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"verification_experiments provides a list of standard MITgcm configurations found in the verification/ subfolder of MITgcm_path[1], which is also where MITgcm typically gets compiled. ","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"In MITgcmTools.jl, a model configuration is generally formulated as a MITgcm_config struct, which let's the user take advantage of the ClimateModels.jl interface.","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"The setup function can then be used to prepare a temporary run directory for the chosen MITgcm_config, build to compile the model within MITgcm_path[1], and MITgcm_launch to run the model in the temporary run folder for MITgcm_config. ","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"Please refer to the Examples, More On Configurations, and ClimateModels Interface sections for further documentation of these aspects. Additional information about the ClimateModels.jl interface is also available in the ClimateModels.jl docs.","category":"page"},{"location":"functionalities/#More-Functionalities","page":"Manual","title":"More Functionalities","text":"","category":"section"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"Interactive notebooks found in the Examples section (and the examples/ subfolder) demonstrate these functionalities. These cover other functionalities like plotting with Makie.jl and using IndividualDisplacements.jl in particle tracking applications.","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"More documentation can also be found in these docs:","category":"page"},{"location":"functionalities/","page":"Manual","title":"Manual","text":"Format Conversions\nFormulae etc\nAPI Reference","category":"page"},{"location":"functionalities_more/#Format-Conversions","page":"-","title":"Format Conversions","text":"","category":"section"},{"location":"functionalities_more/","page":"-","title":"-","text":"findtiles\ncube2compact\ncompact2cube\nconvert2array\nconvert2gcmfaces","category":"page"},{"location":"functionalities_more/#MITgcmTools.findtiles","page":"-","title":"MITgcmTools.findtiles","text":"findtiles(ni::Int,nj::Int,mygrid::gcmgrid)\nfindtiles(ni::Int,nj::Int,grid::String=\"LatLonCap\",GridParentDir=\"../inputs/GRID_LLC90/\")\n\nReturn a MeshArray map of tile indices, mytiles[\"tileNo\"], for tile size ni,nj and extract grid variables accordingly.\n\n\n\n\n\n","category":"function"},{"location":"functionalities_more/#MITgcmTools.cube2compact","page":"-","title":"MITgcmTools.cube2compact","text":"cube2compact(x::Array)\n\nReshape from e.g. size (192, 32, 5) in cube format to (32, 192, 5) in compact format.\n\n\n\n\n\n","category":"function"},{"location":"functionalities_more/#MITgcmTools.compact2cube","page":"-","title":"MITgcmTools.compact2cube","text":"compact2cube(x::Array)\n\nReshape from e.g. size (32, 192, 5) in cube format to (192, 32, 5) in compact format.\n\n\n\n\n\n","category":"function"},{"location":"functionalities_more/#MITgcmTools.convert2array","page":"-","title":"MITgcmTools.convert2array","text":"convert2array(fld::MeshArray)\n\nConvert MeshArray to Array (or vice versa otherwise)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_more/#MITgcmTools.convert2gcmfaces","page":"-","title":"MITgcmTools.convert2gcmfaces","text":"convert2gcmfaces(fld::MeshArray)\n\nConvert mitgcm output to MeshArray (or vice versa otherwise)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_more/#Formulae-etc","page":"-","title":"Formulae etc","text":"","category":"section"},{"location":"functionalities_more/","page":"-","title":"-","text":"SeaWaterDensity\nMixedLayerDepth","category":"page"},{"location":"functionalities_more/#MITgcmTools.SeaWaterDensity","page":"-","title":"MITgcmTools.SeaWaterDensity","text":"SeaWaterDensity(Θ,Σ,Π,Π0)\n\nCompute potential density (ρP), in situ density (ρI), and density referenced to PREF (Π0 in decibars) from potential temperature (Θ in °C), salinity (Σ in psu) and pressure (Π in decibars) according to the UNESCO / Jackett & McDougall 1994 equation of state.\n\nCredits: code based on a Matlab implementation by B. Ferron Reference: https://www.jodc.go.jp/info/iocdoc/UNESCOtech/059832eb.pdf Check value: ρI = 1041.83267kg/m^3 for Θ=3°Celcius, Σ=35psu, Π=3000dbar\n\n(ρP,ρI,ρR) = SeaWaterDensity(3.,35.5,3000.)\nisapprox(ρI,1041.83267, rtol=1e-6)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_more/#MITgcmTools.MixedLayerDepth","page":"-","title":"MITgcmTools.MixedLayerDepth","text":"MixedLayerDepth(Θ,Σ,Δ,mthd)\n\nCompute mixed layer depth from potential temperature (Θ in °C), salinity (Σ in psu) and depth (Δ in method) according to various formulas (mthd == \"BM\", \"Suga\", \"Kara\"). Inputs must be dense vectors without any missing value (or NaN, etc).\n\nD=collect(0.0:1.0:500.0); tmp=(1.0.-tanh.(5*(-1 .+ 2/D[end]*D)));\nT=2.0 .+ 8.0*tmp; S=34.0 .+ 0.5*tmp;\n(ρP,ρI,ρR) = SeaWaterDensity(T,S,D);\n\nmld=MixedLayerDepth(T,S,D,\"BM\"); isapprox(mld,134.0)\n\nusing Plots\nplot(ρP,-D,w=2,label=\"Potential Density\",ylabel=\"Depth\")\nplot!(vec([ρP[1] ρP[end]]),-fill(mld,2),label=\"Mixed Layer Depth\",w=2,c=\"black\",s=:dash)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_more/#API-Reference","page":"-","title":"API Reference","text":"","category":"section"},{"location":"functionalities_more/","page":"-","title":"-","text":"","category":"page"},{"location":"functionalities_read/#Parameter-Files","page":"-","title":"Parameter Files","text":"","category":"section"},{"location":"functionalities_read/","page":"-","title":"-","text":"MITgcm_namelist\nread_namelist\nwrite_namelist","category":"page"},{"location":"functionalities_read/#MITgcmTools.MITgcm_namelist","page":"-","title":"MITgcmTools.MITgcm_namelist","text":"MITgcm_namelist(groups,params)\n\nData structure representing a MITgcm namelist file, such as data.pkg, which contains \n\n    groups :: Array{Symbol,1} = Array{Symbol,1}(undef, 0)\n    params :: Array{OrderedDict{Symbol,Any},1} = Array{OrderedDict{Symbol,Any},1}(undef, 0)\n\nwith model parameters (params) being organized in groups as done in the files.\n\nusing MITgcmTools\nfil=joinpath(MITgcm_path[1],\"verification\",\"advect_xy\",\"run\",\"data\")\nnml=read_namelist(fil)\nMITgcm_namelist(nml.groups,nml.params)\nMITgcm_namelist(groups=nml.groups,params=nml.params)\nMITgcm_namelist(groups=nml.groups)\n\n\n\n\n\n","category":"type"},{"location":"functionalities_read/#MITgcmTools.read_namelist","page":"-","title":"MITgcmTools.read_namelist","text":"read_namelist(fil)\n\nRead a MITgcm namelist file, parse it, and return as a NamedTuple\n\nusing MITgcmTools\ntestreport(\"advect_xy\")\nfil=joinpath(MITgcm_path[1],\"verification\",\"advect_xy\",\"run\",\"data\")\nnamelist=read_namelist(fil)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MITgcmTools.write_namelist","page":"-","title":"MITgcmTools.write_namelist","text":"write_namelist(fil)\n\nSave a MITgcm namelist file. In the example below, one is read from file, modified, and then saved to a new file using write_namelist.\n\nusing MITgcmTools\nfil=joinpath(MITgcm_path[1],\"verification\",\"advect_xy\",\"run\",\"data\")\nnml=read_namelist(fil)\nwrite_namelist(fil*\"_new\",namelist)\n\nor \n\nnml=read(fil,MITgcm_namelist())\nwrite(fil*\"_new\",nml)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MDSIO-Files","page":"-","title":"MDSIO Files","text":"","category":"section"},{"location":"functionalities_read/","page":"-","title":"-","text":"read_mdsio\nread_meta\nGridLoad_mdsio","category":"page"},{"location":"functionalities_read/#MITgcmTools.read_mdsio","page":"-","title":"MITgcmTools.read_mdsio","text":"read_mdsio(fil::String)\n\nRead a single MITgcm MDSIO-type file (\".data\" binary + \".meta\" text pair), and return as an Array\n\np=\"./hs94.cs-32x32x5/run/\"\nx=read_mdsio(p*\"surfDiag.0000000020.002.001.data\")\ny=read_mdsio(p*\"pickup.ckptA.002.001.data\")\nz=read_mdsio(p*\"T.0000000000.002.001.data\")\n\n\n\n\n\nread_mdsio(pth::String,fil::String)\n\nRead a set of MITgcm MDSIO-type files (\".data\" binary + \".meta\" text pair), combine, and return as an Array. Unlike read_mdsio(fil::String) where fil is one complete file name, this method will search within pth  for files that start with fil.\n\np=\"./hs94.cs-32x32x5/run/\"\nx=read_mdsio(p,\"surfDiag.0000000020\")\ny=read_mdsio(p,\"pickup.ckptA\")\nz=read_mdsio(p,\"T.0000000000\")\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MITgcmTools.read_meta","page":"-","title":"MITgcmTools.read_meta","text":"read_meta(metafile)\n\nRead a MITgcm metadata file, parse it, and return as a NamedTuple\n\np=\"./hs94.cs-32x32x5/run/\"\nmeta=read_meta(p*\"surfDiag.0000000020.002.001.meta\")\npairs(meta)\nmeta.dimList\n\n\n\n\n\nread_meta(pth::String,fil::String)\n\nRead a MITgcm metadata files, parse them, and return as an array of NamedTuple\n\np=\"./hs94.cs-32x32x5/run/\"\nmeta=read_meta(p,\"surfDiag.0000000020\")\npairs(meta[end])\n[meta[i].dimList for i in 1:length(meta)]\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MITgcmTools.GridLoad_mdsio","page":"-","title":"MITgcmTools.GridLoad_mdsio","text":"GridLoad_mdsio(myexp::MITgcm_config)\n\nLoad grid variables (XC, YC, Depth, etc) from model run directory (rundir).\n\n\n\n\n\nGridLoad_mdsio(rundir::String)\n\nLoad grid variables (XC, YC, Depth, etc) from model run directory (rundir).\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MNC-Files","page":"-","title":"MNC Files","text":"","category":"section"},{"location":"functionalities_read/","page":"-","title":"-","text":"read_mnc\nGridLoad_mnc","category":"page"},{"location":"functionalities_read/#MITgcmTools.read_mnc","page":"-","title":"MITgcmTools.read_mnc","text":"read_mnc(pth::String,fil::String,var::String)\n\nRead variable var from a set of MITgcm MNC-type files (netcdf files), combine, and  return as an Array. This method will search within pth for files that start with fil.\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MITgcmTools.GridLoad_mnc","page":"-","title":"MITgcmTools.GridLoad_mnc","text":"GridLoad_mnc(γ::gcmgrid)\n\nLoad grid variabes (XC, YC, Depth) model run directory (joinpath(rundir,\"mnc_test_0001\")).   \n\n\n\n\n\nGridLoad_mnc(myexp::MITgcm_config)\n\nLoad grid variables (XC, YC, Depth) from model run directory (joinpath(rundir,\"mnc_test_0001\")).\n\n\n\n\n\nGridLoad_mnc(rundir::String)\n\nLoad grid variables (XC, YC, Depth) from model run directory (joinpath(rundir,\"mnc_test_0001\")).\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#Other-Files","page":"-","title":"Other Files","text":"","category":"section"},{"location":"functionalities_read/","page":"-","title":"-","text":"scan_rundir\nscan_stdout\nread_available_diagnostics\nread_flt\nread_bin\nread_nctiles","category":"page"},{"location":"functionalities_read/#MITgcmTools.scan_rundir","page":"-","title":"MITgcmTools.scan_rundir","text":"scan_rundir(pth::String)\n\nScan a MITgcm run directory and standard output text file  (\"output.txt\" or \"STDOUT.0000\") and return a NamedTuple of collected information (various formats)\n\nInitially, the output looked like (grid=gr,packages=pac,params_time=par1,params_grid=par2,completed=co)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MITgcmTools.scan_stdout","page":"-","title":"MITgcmTools.scan_stdout","text":"scan_stdout(filout::String)\n\nScan a MITgcm standard output text file (\"output.txt\" or \"STDOUT.0000\") and return a NamedTuple of collected information (various formats).\n\npackages : report of packages being compiled and used\nparams_time : initial time, model duation, output frequency, etc\nparams_grid : type of grid (Curvilinear, Cartesian, ...) and array sizes\nparamsfiles : type of output (usemdsio, use_mnc) and array size (ioSize)\ncompleted : true / false depending on the end of standard output file (filout)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MITgcmTools.read_available_diagnostics","page":"-","title":"MITgcmTools.read_available_diagnostics","text":"read_available_diagnostics(fldname::String; filename=\"available_diagnostics.log\")\n\nGet the information for a particular variable fldname from the  available_diagnostics.log text file generated by MITgcm.\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MITgcmTools.read_flt","page":"-","title":"MITgcmTools.read_flt","text":"read_flt(dirIn::String,prec::DataType)\n\nRead displacements from MITgcm/pkg/flt output file into a DataFrame.\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MITgcmTools.read_bin","page":"-","title":"MITgcmTools.read_bin","text":"read_bin(fil::String,kt::Union{Int,Missing},kk::Union{Int,Missing},prec::DataType,mygrid::gcmgrid)\n\nRead model output from binary file and convert to MeshArray. Other methods:\n\nread_bin(fil::String,prec::DataType,mygrid::gcmgrid)\nread_bin(fil::String,mygrid::gcmgrid)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_read/#MITgcmTools.read_nctiles","page":"-","title":"MITgcmTools.read_nctiles","text":"read_nctiles(fileName,fldName,mygrid)\n\nRead model output from NCTiles file and convert to MeshArray instance.\n\nmygrid=GridSpec(\"LatLonCap\")\nfileName=\"nctiles_grid/GRID\"\nDepth=read_nctiles(fileName,\"Depth\",mygrid)\nhFacC=read_nctiles(fileName,\"hFacC\",mygrid)\nhFacC=read_nctiles(fileName,\"hFacC\",mygrid,I=(:,:,1))\n\n\n\n\n\n","category":"function"},{"location":"functionalities_configurations/","page":"-","title":"-","text":"using MITgcmTools # hide\nMITgcm_path[1]","category":"page"},{"location":"functionalities_configurations/#More-On-Configurations","page":"-","title":"More On Configurations","text":"","category":"section"},{"location":"functionalities_configurations/","page":"-","title":"-","text":"MITgcm_path\nverification_experiments\nMITgcm_config","category":"page"},{"location":"functionalities_configurations/#MITgcmTools.MITgcm_path","page":"-","title":"MITgcmTools.MITgcm_path","text":"MITgcm_path\n\nPath to a MITgcm folder. MITgcm_path[1] should generally be used. MITgcm_path[2] is mostly  meant to facilitate comparisons between e.g. MITgcm releases when needed.\n\n\n\n\n\n","category":"constant"},{"location":"functionalities_configurations/#MITgcmTools.verification_experiments","page":"-","title":"MITgcmTools.verification_experiments","text":"verification_experiments()\n\nGet list of all most-standard configurations of MITgcm and return as an Array of MITgcm_config\n\nexps=verification_experiments()\n\n\n\n\n\n","category":"function"},{"location":"functionalities_configurations/#MITgcmTools.MITgcm_config","page":"-","title":"MITgcmTools.MITgcm_config","text":"MITgcm_config()\n\nConcrete type of AbstractModelConfig for MITgcm (as part of the ClimateModels.jl interface for MITgcm) which contains\n\n    model :: String = \"MITgcm\"\n    configuration :: String = \"\"\n    options :: OrderedDict{Any,Any} = OrderedDict{Any,Any}()\n    inputs :: OrderedDict{Any,Any} = OrderedDict{Any,Any}()\n    outputs :: OrderedDict{Any,Any} = OrderedDict{Any,Any}()\n    status :: OrderedDict{Any,Any} = OrderedDict{Any,Any}()\n    channel :: Channel{Any} = Channel{Any}(10) \n    folder :: String = tempdir()\n    ID :: UUID = UUIDs.uuid4()\n\nand can be constructed using keywords as follows\n\nunknown_config=MITgcm_config(configuration=\"unknown\")\n\n\n\n\n\n","category":"type"},{"location":"functionalities_interface/#ClimateModels-Interface","page":"-","title":"ClimateModels Interface","text":"","category":"section"},{"location":"functionalities_interface/","page":"-","title":"-","text":"build\ncompile \nsetup\nMITgcm_launch\nclean","category":"page"},{"location":"functionalities_interface/#ClimateModels.build","page":"-","title":"ClimateModels.build","text":"build(config::MITgcm_config)\n\nBuild the model using genmake2, make depend, and make. The first two link all  code files, headers, etc  in the build/ folder before compiling the model\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\nbuild(config::MITgcm_config,options::String)\n\nBuild the model using genmake2, make depend, and make unless otherwise specified via options. The genmake2 and make depend commands link all  code files, headers, etc  in the build/ folder before make compiles the model.\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_interface/#ClimateModels.compile","page":"-","title":"ClimateModels.compile","text":"compile(config::MITgcm_config)\n\nCompile the model using make in build/ that has already been setup.\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_interface/#ClimateModels.setup","page":"-","title":"ClimateModels.setup","text":"setup(config::MITgcm_config)\n\nCreate a run/ folder and link everything there as needed to be ready to run model as  normally done for most-standard MITgcm configurations (incl. prepare_run and mitgcmuv). Call git_log_init(config) to setup git tracker and put!(config.channel,MITgcm_launch)  to be executed via launch(config) later.\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_interface/#MITgcmTools.MITgcm_launch","page":"-","title":"MITgcmTools.MITgcm_launch","text":"MITgcm_launch(config::MITgcm_config)\n\nGo to run/ folder and effectively call mitgcmuv > output.txt\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\n","category":"function"},{"location":"functionalities_interface/#ClimateModels.clean","page":"-","title":"ClimateModels.clean","text":"clean(config::MITgcm_config)\n\nCancel any remaining task (config.channel) and clean up the run directory (via rm).\n\n(part of the climate model interface as specialized for MITgcm)\n\n\n\n\n\n","category":"function"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"Below are links to static html versions of the examples which one can open with a web browser.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"If instead you wanted to run the notebooks using Pluto.jl, then you might proceed as follows:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"open julia in terminal window\ntype the commands shown below at the Julia prompt\nin web-browser, open one of the notebooks listed hereafter using the Pluto interface.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"cd(\"examples/\")\nusing Pluto\nPluto.run()","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Alternatively, you can run an example at the command line as, e.g., julia examples/MITgcm_run.jl or julia -e 'include(\"examples/MITgcm_run.jl\"); println(rundir)'. This approach, however, assumes that all requirements (e.g., packages + gfortran) for the chosen example are already installed.","category":"page"},{"location":"examples/#Examples-List","page":"Examples","title":"Examples List","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"note: Note\nCompiling MITgcm requires a fortran compiler. This is a requirement for all notebooks except MITgcm_configurations.jl.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"MITgcm_configurations.jl (code here); explore MITgcm configurations and their parameters.\nMITgcm_scan_output.jl (code here) : scan run directory, standard output, read grid files, and vizualize. \nMITgcm_run.jl (code here) : a detailed look into compiling and running the model.\nMITgcm_worklow.jl (code here): build, setup, run, and plot for a chosen standard MITgcm configuration.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"note: Note\nThe HS94* series of examples need to be run in sequence, as they rely on output from one another. This tutorial runs the Held and Suarez 94 benchmark\t with MITgcm on a cube sphere grid, and illustrates particle tracking in the Atmosphere using\tMeshArrays.jl and IndividualDisplacements.jl.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"HS94_animation.jl (code here) : run hs94.cs-32x32x5 configuration, read output, interpolate, and plot maps.\nHS94_particles.jl (code here) : compute particle trajectories from hs94.cs-32x32x5 output generated earlier.\nHS94_Makie.jl (code here) : using Makie.jl instead of Plots.jl","category":"page"},{"location":"#MITgcmTools.jl","page":"Home","title":"MITgcmTools.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Tools for using MITgcm or analyzing its output. This includes not only manipulating model inputs and outputs, but also compiling and running the model. Much of the functionalities are documented via the Examples section, as highlighted hereafter.","category":"page"},{"location":"","page":"Home","title":"Home","text":"ClimateModels.jl provides a standard interface for such workflows. Related packages also include MeshArrays.jl defining in-memory containters for gridded model output, and IndividualDisplacements.jl enabling particle tracking applications. ","category":"page"},{"location":"#Main-Features","page":"Home","title":"Main Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Scan / Read / Write MITgcm Files\nStandard MITgcm configurations\nClimate Model Interface\nExamples (notebooks in examples/)","category":"page"},{"location":"#main-contents","page":"Home","title":"Table Of Contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"functionalities.md\",\n    \"functionalities_read.md\",\n    \"functionalities_configurations.md\",\n    \"functionalities_interface.md\",\n    \"functionalities_more.md\",\n    \"examples.md\",\n]\nDepth = 2","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: Simulated particles from HS94 on cube sphere grid)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: The impossible MITgcm rendering)","category":"page"}]
}
