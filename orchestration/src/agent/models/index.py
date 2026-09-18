from .z import Z
from .groq import GROQ
from .naga import NAGA
from .nvidia import NVIDIA
from .openrouter import OPENROUTER

providers = {
    "Z": Z,
    "GROQ": GROQ,
    "NAGA": NAGA,
    "NVIDIA": NVIDIA,
    "OPENROUTER": OPENROUTER,
}