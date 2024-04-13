---
title: 'MITgcm.jl: a Julia Interface to the MITgcm'
tags:
  - Julia
  - Ocean
  - climate
authors:
  - name: Gaël Forget
    orcid: 0000-0002-4234-056X
    affiliation: 1
affiliations:
 - name: Massachusetts Institute of Technology, Cambridge, MA, USA
   index: 1
date: 18 March 2024
bibliography: paper.bib
---
# Summary 

General circulation models are used to study climate, ocean and atmosphere dynamics, biogechemistry, ecology, and more. The `MITgcm`, written in `Fortran`, is one of the most widely-used models of this class. We present `MITgcm.jl`, an interface to `MITgcm` written in Julia that can be used to not only analyze model results but also drive model simulations. With `MITgcm.jl` users can setup, build, and run `MITgcm` without having to know shell scripting or having to edit text files manually. `MITgcm.jl` provides support in `Julia` for the various input and output formats used in `MITgcm`. It implements the `ClimateModels.jl` interface, and opens up a whole new way of using `MITgcm` interactively from Jupyter and Pluto notebooks. `MITgcm.jl` in turn brings full-featured, reliable ocean modeling to Julia.

# Statement of Need

The cutting-edge of climate modeling, and much of its legacy, is based on numerical models written in compiled languages like `Fortran` or `C`. The MIT general circulation model (`MITgcm`) for example has recently been run globally at the kilometer scale to provide an unprecented view of ocean dynamics (Fig.~\ref{fig:examples}, @camp-etal:04,  @marshall1997fvi). With its unrivaled adjoint modeling capabilities, `MITgcm` is also the computational engine that powers the ECCO reanalysis, a data-assimilating product widely-used in climate science (Fig. \ref{fig:examples},  @Forget2015a,  @Forget2024). `MITgcm` further provides unique modeling capabilities for ocean biogeochemistry, ecology, and optics (@Dutkiewicz2015, @Cbiomes2019). While a new generation of models, written in languages like C++ and Julia, is poised to better exploit GPUs (@OceananigansJOSS, @Wu2022, @e3sm-model), `Fortran`-based models are expected to remain popular on other computer architectures for the foreseable future. They also provide a crucial reference point to evaluate next generation models.

Models like `MITgcm` benefit from decades of accumulated expertise, careful inspection, and continuous integration. Running such a model or exploiting its results does not require knowing the computer language being used internally. However, `Fortran`-based models can sometime appear complicated or inconvenient to operate due to technical hurdles like having to use a compiler directly, to edit text files manually, or to deal with shell-scripting. Fortunately, such issues are easily alleviated by providing a user-friendly interface (e.g., Fig. \ref{fig:interact}) written in a high-level language (e.g., `Julia`) to interact with climate models written in lower-level languages as done here for `MITgcm`.

`MITgcm.jl` can read the various types of model output that `MITgcm` generates. This feature in itself enables not only common result analyses like mapping and plotting, but also accurate computations of quantities like ocean heat transport and global warming (Fig. \ref{fig:examples}, @Forget2015a, @Forget2019, @Forget2024). In addition, `MITgcm.jl` makes it easy to deploy and run any configuration of `MITgcm` on laptops, HPC clusters, and in the cloud. Run-time model parameters are represented in `Julia` as an ordered dictionary and can be exported to the standard `TOML` file format or to the native `MITgcm` format. Owing to this two-way interface, `MITgcm` can now be used from Jupyter or Pluto notebooks directly. `MITgcm.jl` includes a series of examples and tutorials to that effect (e.g., Fig. \ref{fig:interact}). Video presentations listed below further demonstrate key features.

`MITgcm.jl` brings all of `MITgcm`'s modeling capabilities to a new category of users, who may not be trained in `Fortran` or shell-scripting. Furthermore, `MITgcm.jl` implements the `ClimateModels.jl` interface [@ClimateModels2024], which (1) streamlines the handling of file folders, (2) makes it easier to run and rerun simulations, and (3) supports an extensive lineup of complementary models written in various languages. `MITgcm.jl` can also be used to build integrated cyberinfrastructure solutions as demonstrated in  @Duckworth2023. 

`MITgcm.jl` in turn provides the vast `MITgcm` user community with a bridge to new tools for machine learning, artificial intelligence, differential equations, visualization, etc from the `Julia` software stack. Examples include the use of `MITgcm` output in offline mode to estimate sea water pathways and ocean transports (Fig. \ref{fig:examples}, @Forget2021), or simulate the behavior of marine ecosystems using an agent-based modeling approach [@Wu2022].

![Examples of `MITgcm` output, read, processed, and plotted in Julia using `MITgcm.jl`. Top left : global mean ocean warming over 1980-2022 [@Forget2024]. Top right : time mean view of the global ocean conveyor belt [@Rousselet2021]. Bottom right : tracking seawater pathtways along the Gulf Stream via `IndividualDisplacements.jl` [@Forget2021]. Bottom left : global `MITgcm` simulation on a 4km resolution Lat-Lon-Cap grid [@Forget2015a] visualize in `Julia`. \label{fig:examples}](MITgcm_Examples.png){ width=100% }

![Notebook that operates `MITgcm` interactively, and let's user visualize model results without having to write code. Both Jupyter and Pluto notebooks are supported.\label{fig:interact}](Pluto_workflow.png){ width=100% }

## Video Presentations

- [MITgcm demo](https://youtu.be/0ec8I2-A5oQ?si=DXavbks9qRHCxFMx) that uses the `ClimateModels.jl` interface to run `MITgcm` via `MITgcm.jl`.
- [JuliaCon2021](https://www.youtube.com/watch?v=XR5hKCja0uw&t=0s) `ClimateModels.jl ` was presented at JuliaCon in 2021.
- [JuliaCon2023](https://www.youtube.com/watch?v=_Y6mNrN7eWA&t=0s) `ClimateModels.jl` and `MITgcm.jl` were further presented at JuliaCon in 2023.

# Acknowledgements

G.F. is supported by NASA Awards 80NSSC20K0796, 80NSSC23K0355, 80NSSC22K1697, 1676067, and 1686358.

# References
